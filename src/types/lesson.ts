export interface Lesson {
  content?: string;
  notes?: string;
  assets?: (Asset | string)[];
}

export interface Asset {
  url: string;
  width?: number;
}
