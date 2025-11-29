import groupPhoto from '../../assets/group-photo-cropped.jpg';

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
          </div>

          <div className="group-photo-container">
            <img src={groupPhoto} alt="Group Photo" className="group-photo-img" />
          </div>
        </div>
      </div>
    );
}