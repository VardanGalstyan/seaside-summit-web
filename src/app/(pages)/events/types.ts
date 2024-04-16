import {
  HeaderPropsType,
  ImageType,
  LinkPropsType,
  PartnerType,
  RoadmapType,
  StepType,
  TrackType,
} from "@/lib/types";

export interface ProgramType {
  id: number;
  header: HeaderPropsType;
  title: HeaderPropsType;
  ctaLink: LinkPropsType;
  tracks: TrackType[];
}

export interface JoinType {
  id: number;
  header: HeaderPropsType;
  steps: StepType[];
  ctaLink: LinkPropsType;
}

export interface AboutEventType {
  id: number;
  header: HeaderPropsType;
  ctaLink: LinkPropsType;
  videoUrl: string;
}

export interface StatisticsType {
  id: number;
  stats: StepType[];
  title: string;
  ctaLink: LinkPropsType;
}
export interface PropositionType {
  id: number;
  stats: HeaderPropsType[];
  title: string;
  ctaLink: LinkPropsType;
}

export interface EventType {
  id: number;
  slug: string;
  startDate: string;
  endDate: string;
  location: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  country: string;
  join: JoinType;
  programm: ProgramType;
  roadmap: RoadmapType;
  eventValues: PropositionType;
  statistics: StatisticsType;
  aboutEvent: AboutEventType;
  tracks: TrackType[];
  partners: PartnerType[];
  cover: ImageType;
}
