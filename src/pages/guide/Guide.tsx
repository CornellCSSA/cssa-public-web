import './Guide.css';
import HeroSection from '../../components/HeroSection';
import ImageWithLoader from '../../components/ImageWithLoader';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

export default function Guide() {
  const { guide } = useSiteContent();
  return (
    <div>
      <HeroSection heroImage={resolveMedia(guide.hero.image)} title={guide.hero.title} />
      <div className="guide-container">
        <h2 className="guide-heading">{guide.heading}</h2>
        <p>
          {guide.text}
        </p>
        <a href={resolveMedia(guide.file.url)} download={guide.file.fileName} title="点击下载新生手册" className="guide-download-link">
          <ImageWithLoader 
            src={resolveMedia(guide.cover)} 
            alt="Guide Cover" 
            className="guide-cover-img" 
          />
        </a>
      </div>
    </div>
  );
}
