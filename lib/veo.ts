import { GoogleGenAI } from "@google/genai";

export const generateVeoVideo = async (prompt: string): Promise<string> => {
  // Check/Request API Key if the environment wrapper is present
  const aistudio = (window as any).aistudio;
  if (aistudio) {
    const hasKey = await aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await aistudio.openSelectKey();
    }
  }

  // Initialize AI with the key (handled by the environment injection after selection)
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '9:16' // Portrait aspect ratio for vertical cards
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({operation: operation});
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) throw new Error("No video URI returned from generation");

    // Fetch the actual video bytes to create a local Blob URL
    // Must append key to the download link
    const response = await fetch(`${videoUri}&key=${process.env.API_KEY || ''}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);

  } catch (error) {
    console.error("Veo Generation Error:", error);
    // Handle specific key expiry/missing cases if possible
    const aistudio = (window as any).aistudio;
    if (error instanceof Error && error.message.includes("Requested entity was not found") && aistudio) {
        await aistudio.openSelectKey();
        throw new Error("API Key expired or invalid. Please try again.");
    }
    throw error;
  }
};