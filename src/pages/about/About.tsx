import './About.css'
import HeroSection from '../../components/HeroSection';
import guideHeroImage from '../../assets/about-hero.jpg';
import Intro from './Intro';
import History from './History';
import Join from './Join';
import { departmentsData } from './departmentsData';
import DepartmentCard from './DepartmentCard';

export default function About() {
	return (
		<div>
			<HeroSection heroImage={guideHeroImage} title="关于CSSA" />
			<Intro />
			<History />
			<div className="departments-container">
				<h2 className="departments-heading">部门介绍</h2>
				<p>
					Cornell CSSA主席团（E-Board）是服务康奈尔大学全体中国学生学者的常设机构，设4个职能部门和秘书处。学联主席团采用扁平化管理的模式；主席团成员规模保持在50人左右。
				</p>
				<div className="departments-content">
					{departmentsData.map((departmentData) => (
						<DepartmentCard key={departmentData.name} departmentData={departmentData} />
					))}
				</div>
			</div>
			<Join />
		</div>
	);
}
