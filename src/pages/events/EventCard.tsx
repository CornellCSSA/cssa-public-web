import { EventDataObject } from './event.type';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function EventCard({ eventData }: { eventData: EventDataObject }) {
  return (
    <div className={`event-card event-card-${eventData.orientation}`}>
        <div className="event-content">
            <h3 className="event-title">{eventData.title}</h3>
            <h5 className="event-time">时间：{eventData.time}</h5>
            <p className="event-description">{eventData.description}</p>
            <button className="event-button" onClick={() => window.open(eventData.link, '_blank')}>往期回顾</button>
        </div>
        <ImageWithLoader 
            src={eventData.image} 
            alt={eventData.title} 
            className="event-image" 
            containerClassName="event-image-container"
        />
    </div>
  );
}