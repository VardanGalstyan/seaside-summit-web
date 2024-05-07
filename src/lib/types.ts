export interface BlockType {
  id: number;
  __component: string;
  title?: string;
  subTitle?: string;
}

export interface HeaderType {
  id?: number;
  title: string;
  description?: string;
}

export interface ElementType {
  id: number;
  title: string;
  paragraph: string;
  icon: ImageType;
  color: string;
}

export interface StepType {
  id: number;
  title: string;
  paragraph: string;
  numberOfStep: string;
  icon: ImageType;
}

export interface LinkType {
  id?: number;
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface ImageType {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: FormatType;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ImageMetaDataType;
  createdAt: string;
  updatedAt: string;
}

interface FormatType {
  thumbnail: FormatElementType;
  small: FormatElementType;
}

interface FormatElementType {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata: ImageMetaDataType[];
}

interface ImageMetaDataType {
  public_id: string;
  resource_type: string;
}

export interface TrackType {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: ImageType;
}

export interface PartnerType {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  partnerId: string;
  name: string;
  videoUrl: string;
  status: string;
  info: string;
  url: string;
  logo: ImageType;
  images: ImageType[];
}

export interface RoadmapType {
  id: number;
  steps: StepType[];
  header: HeaderType;
  ctaLink: LinkType;
}

export interface InfoCollectionType {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: ImageType;
}

export interface WeatherType {
  id: number;
  day: number;
  night: number;
  description: string;
}
