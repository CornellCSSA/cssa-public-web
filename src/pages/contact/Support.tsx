import './Contact.css';
import ImageWithLoader from '../../components/ImageWithLoader';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function Support() {
    const { support } = useSiteContent().contact;
    return (
      <div className="support-content">
        <h2 className = "contact-heading">{support.heading}</h2>
        <p>{support.text}</p>
        <ImageWithLoader 
            src={resolveMedia(support.qrCode)} 
            alt="QR code" 
            className="wechatCode-img" 
            containerClassName="wechat-qr-container"
        />
      </div>
    );
}
