import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const searchDeepMind = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the search engine for the Google DeepMind website. 
      Answer the user's query specifically about Google DeepMind's research, technologies (like AlphaFold, Gemini, Veo, etc.), history, and impact.
      Keep the answer concise, professional, and in the tone of the DeepMind brand (scientific, optimistic, clear).
      If the query is unrelated to DeepMind or AI, politely redirect them to search for DeepMind-related topics.
      
      User Query: ${query}`,
    });

    return response.text || "I couldn't find relevant information on that topic within DeepMind's public archives.";
  } catch (error) {
    console.error("Gemini Search Error:", error);
    throw new Error("Search service is temporarily unavailable.");
  }
};
