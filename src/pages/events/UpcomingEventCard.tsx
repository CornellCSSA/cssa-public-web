import { UpcomingEventDataObject } from './event.type';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function UpcomingEventCard({ upcomingEventData }: { upcomingEventData: UpcomingEventDataObject }) {
    const isLinkAvailable = upcomingEventData.link && upcomingEventData.link !== '#';

    return (
        <div className="upcoming-event-card">
            <ImageWithLoader 
                src={upcomingEventData.image} 
                alt={upcomingEventData.title} 
                className="upcoming-event-image" 
                containerStyle={{ width: '280px', height: '280px', flexShrink: 0 }}
            />
            <div className="upcoming-event-content">
                <h3>{upcomingEventData.title}</h3>
                <h5>{upcomingEventData.time}</h5>
                <h5>{upcomingEventData.location}</h5>
                <button 
                    className={`upcoming-event-button ${!isLinkAvailable ? 'disabled' : ''}`} 
                    onClick={() => isLinkAvailable && window.open(upcomingEventData.link, '_blank')}
                    disabled={!isLinkAvailable}
                >
                    {isLinkAvailable ? '我想参加！' : '敬请期待'}
                </button>
            </div>
        </div>
    );
}