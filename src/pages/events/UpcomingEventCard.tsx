import { UpcomingEventDataObject } from './event.type';

export default function UpcomingEventCard({ upcomingEventData }: { upcomingEventData: UpcomingEventDataObject }) {
    const isLinkAvailable = upcomingEventData.link && upcomingEventData.link !== '#';

    return (
        <div className="upcoming-event-card">
            <img src={upcomingEventData.image} alt={upcomingEventData.title} className="upcoming-event-image" />
            <div className="upcoming-event-content">
                <h3>{upcomingEventData.title}</h3>
                <h5>{upcomingEventData.time}</h5>
                <p>{upcomingEventData.location}</p>
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