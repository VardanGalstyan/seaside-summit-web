import { getEventsPage } from "@/data/loaders";
import { eventsBlockRenderer } from "@/lib/block-renderer";
import EventCard from "@/ui/cards/event-card";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import { EventType } from "./types";

export default async function EventPage() {
  const { blocks, events } = await getEventsPage();

  return (
    <main className="[&>*:nth-child(even)]:bg-gray">
      <SectionWrapper>
        {events.map((event: EventType) => (
          <EventCard key={event.id} data={event} />
        ))}
      </SectionWrapper>
      {blocks.map((block: any) => eventsBlockRenderer(block))}
    </main>
  );
}
