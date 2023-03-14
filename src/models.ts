export interface WorkProps {
  content: {
    name: string;
    description: string;
    heroImage: string;
    date?: string; 
  }
}

export interface ExperienceItem {
  item: string
}

export interface Experience {
  date: string;
  title: string;
  subtitle: string;
  open: boolean;
  responsibilities: ExperienceItem[];
  achievements: ExperienceItem[];
}

