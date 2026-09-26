import './About.css';
import { Fragment } from 'react';
import ImageWithLoader from '../../components/ImageWithLoader';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function History() {
    const { history } = useSiteContent().about;
    return (
        <div className="history-outer-container">
            <div className="history-container">
                <div className="history-timeline">
                    <h2 className="history-heading">{history.heading}</h2>
                    {history.entries.map((entry, index) => (
                        <Fragment key={index}>
                            {index > 0 && <div className="timeline-divider"></div>}
                            <div className="timeline-entry">
                                <div className="timeline-year">{entry.year}</div>
                                <div className="timeline-content">{entry.text}</div>
                            </div>
                        </Fragment>
                    ))}
                </div>
                <div className="history-image">
                    <ImageWithLoader 
                        src={resolveMedia(history.image)} 
                        alt={history.heading} 
                        containerClassName="history-image-container"
                    />
                </div>
            </div>
        </div>
    );
}
