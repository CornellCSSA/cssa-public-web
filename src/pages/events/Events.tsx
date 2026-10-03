import './Events.css';
import EventCard from './EventCard';
import UpcomingEventCard from './UpcomingEventCard';
import HeroSection from '../../components/HeroSection';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function Events() {
  const { events } = useSiteContent();
  return (
    <div>
      <HeroSection heroImage={resolveMedia(events.hero.image)} title={events.hero.title} />
      <h2 className="upcoming-events-heading">{events.upcoming.heading}</h2>
      <div className="upcoming-events-container">
        {events.upcoming.items.map((event, index) => (
          <UpcomingEventCard key={index} upcomingEventData={event} />
        ))}
      </div>
      <div className="events-outer-container">
      <h2 className="events-heading">{events.annual.heading}</h2>
        <div className="events-container">
          {events.annual.items.map((event, index) => (
            // 图文左右交替，从左开始。
            <EventCard key={index} eventData={event} orientation={index % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </div>
  );
}
