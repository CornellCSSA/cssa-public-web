import './Contact.css';
import HeroSection from '../../components/HeroSection';
import contactHeroImage from '../../assets/contact-hero.jpg';
import SocialMedia from './SocialMedia';
import wechatCode from '../../assets/QR-code.jpg';
import Support from './Support';
export default function Contact() {
	return (
		<div>
			<HeroSection heroImage={contactHeroImage} title="联系我们" />
			<SocialMedia />
			<h2 className = "contact-heading">赞助合</h2>
			<Support />
			<img src = {wechatCode} alt="QR code" className = "wechatCode-img"/>
		</div>
	);
}

