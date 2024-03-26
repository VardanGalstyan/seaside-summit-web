export interface BlockType {
  id: number;
  __component: string;
  title?: string;
  subTitle?: string;
}

export interface LinkProps {
  id?: number;
  title: string;
  href: string;
  isExternal: boolean;
}

export interface HeaderProps {
  id: number;
  title: string;
  paragraph: string;
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
  thumbnail: FormatItemType;
  small: FormatItemType;
}

interface FormatItemType {
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
