import './Events.css';
import EventCard from './EventCard';
import UpcomingEventCard from './UpcomingEventCard';
import { eventsData, upcomingEventData } from './events.data';

import HeroSection from '../../components/HeroSection';
import eventsHeroImage from '../../assets/events-hero.jpg'; 

export default function Events() {
  return (
    <div>
      <HeroSection heroImage={eventsHeroImage} title="活动一览" />
      <div className="upcoming-events-container">
        {upcomingEventData.map((event) => (
          <UpcomingEventCard key={event.title} upcomingEventData={event} />
        ))}
      </div>
      <div className="events-container">
        {eventsData.map((event) => (
          <EventCard key={event.title} eventData={event} />
        ))}
      </div>
    </div>
  );
}
  

