import { ReactNode } from "react";

export interface Project {
  title: string;
  icon: string;
  description: string;
  text: ReactNode;
  images: string[];
  url?: string;
  tags: string[];
}
