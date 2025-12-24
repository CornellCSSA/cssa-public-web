import './Contact.css';
import wechatCode from '../../assets/QR-code.jpg';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function Support() {
    return (
      <div className="support-content">
        <h2 className = "contact-heading">赞助合作</h2>
        <p>如有赞助推广或合作需求，请添加Cornell CSSA小助手1号的微信 (微信号：cssa_cornell)</p>
        <ImageWithLoader 
            src={wechatCode} 
            alt="QR code" 
            className="wechatCode-img" 
            containerClassName="wechat-qr-container"
        />
      </div>
    );
}