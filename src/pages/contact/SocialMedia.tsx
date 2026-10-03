import ImageWithLoader from '../../components/ImageWithLoader';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function SocialMedia() {
    const { social } = useSiteContent().contact;
    return (
        <div className="social-media-frame">
        <div className="social-media-container">
          <div className="social-media-content">
            <h2>{social.heading}</h2>
            {social.items.map((item, index) => (
              <p key={index}><span className="social-label">{item.label}：</span>{item.value}</p>
            ))}
          </div>

          <div className="group-photo-container">
            <ImageWithLoader 
                src={resolveMedia(social.image)} 
                alt="Group Photo" 
                className="group-photo-img" 
                containerClassName="social-group-photo-container"
            />
          </div>
        </div>
      </div>
    );
}
