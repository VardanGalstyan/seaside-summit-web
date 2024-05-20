import { EventType } from "@/app/(pages)/events/types";
import EventCard from "@/ui/cards/event-card";
import SectionWrapper from "@/ui/wrappers/section-wrapper";

const EventsWrapper = ({ events }: { events: EventType[] }) => {
  return (
    <SectionWrapper classNames="!flex-row">
      {events.map((event) => (
        <EventCard key={event.id} data={event} />
      ))}
    </SectionWrapper>
  );
};

export default EventsWrapper;
