export interface Lesson {
  content?: string;
  notes?: string;
  assets?: Asset[];
}

export interface Asset {
  url?: string;
  width?: number;
  imgur?: string;
}
