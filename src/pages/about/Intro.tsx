import './About.css';
import ImageWithLoader from '../../components/ImageWithLoader';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function Intro() {
    const { intro } = useSiteContent().about;
    return (
        <div className="intro-container">
            <div className="intro-image">
                <ImageWithLoader 
                    src={resolveMedia(intro.image)} 
                    alt={intro.heading} 
                    containerClassName="intro-image-container"
                />
            </div>
            <div className="intro-content">
                <h2 className="intro-heading">{intro.heading}</h2>
                {intro.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}
