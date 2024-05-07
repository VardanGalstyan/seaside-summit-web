import {
  BlockType,
  HeaderType,
  InfoCollectionType,
  WeatherType,
} from "@/lib/types";

export interface InformationType extends BlockType {
  header: HeaderType;
  paragraph: HeaderType;
  entertainments: InfoCollectionType[];
  rules: InfoCollectionType[];
  amenities: InfoCollectionType[];
  weather: WeatherType;
}
