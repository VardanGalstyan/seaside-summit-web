import { EventType } from "./types";
import { getEventsPage } from "@/data/loaders";
import { eventsBlockRenderer } from "@/lib/block-renderer";
import EventCard from "@/ui/cards/event-card";
import PageWrapper from "@/ui/wrappers/page-wrapper";
import SectionWrapper from "@/ui/wrappers/section-wrapper";

export default async function EventPage() {
  const { blocks, events } = (await getEventsPage()) ?? {};

  if (!blocks) return <div>No blocks found</div>;

  return (
    <PageWrapper>
      <SectionWrapper classNames="!flex-row">
        {events.map((event: EventType) => (
          <EventCard key={event.id} data={event} />
        ))}
      </SectionWrapper>
      {blocks.map((block: any) => eventsBlockRenderer(block))}
    </PageWrapper>
  );
}
