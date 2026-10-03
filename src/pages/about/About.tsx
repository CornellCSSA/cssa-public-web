import './About.css'
import HeroSection from '../../components/HeroSection';
import Intro from './Intro';
import History from './History';
import Join from './Join';
import DepartmentCard from './DepartmentCard';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function About() {
	const { about } = useSiteContent();
	return (
		<div>
			<HeroSection heroImage={resolveMedia(about.hero.image)} title={about.hero.title} />
			<Intro />
			<History />
			<div className="departments-container">
				<h2 className="departments-heading">{about.departments.heading}</h2>
				<p>{about.departments.text}</p>
				<div className="departments-content">
					{about.departments.items.map((departmentData, index) => (
						<DepartmentCard key={index} departmentData={departmentData} />
					))}
				</div>
			</div>
			<Join />
		</div>
	);
}
