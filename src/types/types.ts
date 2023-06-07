export interface ParamsIdProps {
  id: string;
}

export interface LocationPathnameProps {
  pathname: string;
}

export interface GameProps {
  description?: string;
  developer?: string;
  freetogame_profile_url?: string;
  game_url?: string;
  genre?: string;
  id?: number;
  minimum_system_requirements?: MinimumSystemRequirementsProps;
  platform?: string;
  publisher?: string;
  release_date?: string;
  screenshots?: ScreenshotsProps[];
  short_description?: string;
  status?: string;
  thumbnail?: string;
  title?: string;
  favorite?: boolean;
}

export interface MinimumSystemRequirementsProps {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface ScreenshotsProps {
  id: number;
  image: string;
}

export interface NewsProps {
  content: string;
  description: string;
  image: string;
  publishedAt: string;
  source: SourceNewsProps;
  title: string;
  url: string;
  image_url: string | null;
}

interface SourceNewsProps {
  name: string;
  url: string;
}

export interface IdProps {
  id: string;
}
