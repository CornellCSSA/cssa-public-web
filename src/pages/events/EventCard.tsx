import type { AnnualEvent } from '../../content/types';
import { resolveMedia } from '../../content/media';
import ImageWithLoader from '../../components/ImageWithLoader';

interface EventCardProps {
  eventData: AnnualEvent;
  orientation: 'left' | 'right';
}

export default function EventCard({ eventData, orientation }: EventCardProps) {
  return (
    <div className={`event-card event-card-${orientation}`}>
        <div className="event-content">
            <h3 className="event-title">{eventData.title}</h3>
            <h5 className="event-time">时间：{eventData.time}</h5>
            <p className="event-description">{eventData.description}</p>
            <button className="event-button" onClick={() => window.open(eventData.link, '_blank')}>往期回顾</button>
        </div>
        <ImageWithLoader 
            src={resolveMedia(eventData.image)} 
            alt={eventData.title} 
            className="event-image" 
            containerClassName="event-image-container"
        />
    </div>
  );
}
