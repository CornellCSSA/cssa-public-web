import './Guide.css';
import HeroSection from '../../components/HeroSection';
import ImageWithLoader from '../../components/ImageWithLoader';
import guideHeroImage from '../../assets/guide-hero.jpg';
import guideCover from '../../assets/guide.jpg';

export default function Guide() {
  return (
    <div>
      <HeroSection heroImage={guideHeroImage} title="康村指南" />
      <div className="guide-container">
        <h2 className="guide-heading">新生手册</h2>
        <p>
          请点击下方封面图下载
        </p>
        <a href="/files/2024版CSSA新生手册.pdf" download="2024版CSSA新生手册.pdf" title="点击下载新生手册" className="guide-download-link">
          <ImageWithLoader 
            src={guideCover} 
            alt="Guide Cover" 
            className="guide-cover-img" 
            containerStyle={{ width: '400px', display: 'block', aspectRatio: '0.75', height: 'auto' }}
          />
        </a>
      </div>
    </div>
  );
}