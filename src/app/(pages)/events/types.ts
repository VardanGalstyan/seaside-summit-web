import {
  ElementType,
  ImageType,
  LinkType,
  PartnerType,
  RoadmapType,
  StepType,
  TrackType,
} from "@/lib/types";

export interface ProgramType {
  id: number;
  header: ElementType;
  title: ElementType;
  ctaLink: LinkType;
  tracks: TrackType[];
}

export interface JoinType {
  id: number;
  header: ElementType;
  steps: StepType[];
  ctaLink: LinkType;
}

export interface AboutEventType {
  id: number;
  header: ElementType;
  ctaLink: LinkType;
  videoUrl: string;
}

export interface StatisticsType {
  id: number;
  stats: StepType[];
  title: string;
  ctaLink: LinkType;
}
export interface PropositionType {
  id: number;
  stats: ElementType[];
  title: string;
  ctaLink: LinkType;
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
