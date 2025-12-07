import './Contact.css';
import wechatCode from '../../assets/QR-code.jpg';

export default function Support() {
    return (
      <div className="support-content">
        <h2 className = "contact-heading">赞助合作</h2>
        <p>如有赞助推广或合作需求，请添加Cornell CSSA小助手1号的微信 (微信号：cssa_cornell)</p>
        <img src = {wechatCode} alt="QR code" className = "wechatCode-img"/>
      </div>
    );
}