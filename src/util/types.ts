import { IGatsbyImageData } from 'gatsby-plugin-image';

// export type TEntity = TCertificate | TProject;

export interface TCertificate {
  name: string;
  filename: string;
}

export interface TCertificateImage {
  filename: string;
  image: IGatsbyImageData;
}

export interface TProject {
  name: string;
  title: string;
  description: string;
  icons?: string[];
  path?: string;
}

export interface TSkills {
  category: string;
  skills: TSkill[];
}

export interface TSkill {
  name: string;
  level: number;
}

export interface TEvent {
  title: string;
  date: string;
  description: string;
  location: string;
}
