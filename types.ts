export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl?: string;
  videoPrompt?: string;
  description: string;
  customMediaUrl?: string;
  customMediaType?: 'image' | 'video';
}

export interface SearchState {
  isOpen: boolean;
  query: string;
  result: string | null;
  isLoading: boolean;
  error: string | null;
}