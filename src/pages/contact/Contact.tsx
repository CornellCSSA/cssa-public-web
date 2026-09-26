import './Contact.css';
import HeroSection from '../../components/HeroSection';
import SocialMedia from './SocialMedia';
import Support from './Support';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function Contact() {
	const { hero } = useSiteContent().contact;
	return (
		<div>
			<HeroSection heroImage={resolveMedia(hero.image)} title={hero.title} />
			<SocialMedia />
			<Support />
		</div>
	);
}
