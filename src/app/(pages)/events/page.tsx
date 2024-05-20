import EventsWrapper from "@/components/events-wrapper";
import { getEventsPage } from "@/data/loaders";
import { eventsBlockRenderer } from "@/lib/block-renderer";

import PageWrapper from "@/ui/wrappers/page-wrapper";

export default async function EventPage() {
  const { blocks, events } = (await getEventsPage()) ?? {};

  if (!blocks) {
    return null;
  }

  return (
    <PageWrapper>
      <EventsWrapper events={events} />
      {blocks.map((block: any) => eventsBlockRenderer(block))}
    </PageWrapper>
  );
}
