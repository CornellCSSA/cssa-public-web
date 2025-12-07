import './Contact.css';
import HeroSection from '../../components/HeroSection';
import contactHeroImage from '../../assets/contact-hero.jpg';
import SocialMedia from './SocialMedia';
import Support from './Support';
export default function Contact() {
	return (
		<div>
			<HeroSection heroImage={contactHeroImage} title="联系我们" />
			<SocialMedia />
			<Support />
		</div>
	);
}

