import groupPhoto from '../../assets/group-photo.jpg';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function SocialMedia() {
    return (
        <div className="social-media-frame">
        <div className="social-media-container">
          <div className="social-media-content">
            <h2>社交媒体</h2>
            <p><span className="social-label">微信公众号：</span>CornellCSSA</p>
            <p><span className="social-label">小红书：</span>@康奈尔学联</p>
            <p><span className="social-label">Instagram：</span>cu_cssa</p>
            <p><span className="social-label">LinkedIn：</span>Cornell CSSA</p>
            <p><span className="social-label">YouTube：</span>@cornellcssa4014</p>
            <p><span className="social-label">Bilibili：</span>Cornell_CSSA</p>
            <p><span className="social-label">E-Mail：</span>cornellcssa6666@gmail.com</p>
            <p><span className="social-label">BBS论坛：</span>corneller.com</p>
          </div>

          <div className="group-photo-container">
            <ImageWithLoader 
                src={groupPhoto} 
                alt="Group Photo" 
                className="group-photo-img" 
                containerClassName="social-group-photo-container"
            />
          </div>
        </div>
      </div>
    );
}