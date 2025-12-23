import './Home.css'; // Importing from the styles folder
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImageWithLoader from '../../components/ImageWithLoader';

// Importing images
import cover1 from '../../assets/cover1.jpg';
import cover2 from '../../assets/cover2.png';
import cover3 from '../../assets/cover3.png';
import homeEvent1 from '../../assets/home-events-1.jpg';
import homeEvent2 from '../../assets/home-events-2.jpg';
import homeEvent3 from '../../assets/home-events-3.jpg';
import homeEvent4 from '../../assets/home-events-4.jpg';
import homeEvent5 from '../../assets/home-events-5.jpeg';
import homeEvent6 from '../../assets/home-events-6.jpg';
import guideCover from '../../assets/guide.jpg';

interface EventCard {
  id: number;
  image: string;
  title: string;
  link: string;
}

const events: EventCard[] = [
  { id: 1, image: homeEvent1, title: '中秋嘉年华', link: 'https://mp.weixin.qq.com/s/YZ2qmgHP29AeaEnPpKt80Q' },
  { id: 2, image: homeEvent2, title: '新生见面会', link: 'https://mp.weixin.qq.com/s/OhopG7Us-s9E_NYsf6Q0RA' },
  { id: 3, image: homeEvent3, title: '春晚', link: 'https://mp.weixin.qq.com/s/_0rCBHrL8SIHFgrnPPDwAg' },
  { id: 4, image: homeEvent4, title: '运动季', link: 'https://mp.weixin.qq.com/s/CJjMq4MCUNfU2NrMsJXm3w' },
  { id: 5, image: homeEvent5, title: '康村好声音', link: 'https://mp.weixin.qq.com/s/QYtnHw7qfHKkWdQAD-qt9A' },
  { id: 6, image: homeEvent6, title: '新生接机', link: '#' },
];

const heroImages = [cover1, cover2, cover3];

export default function Home () {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="home-hero-background">
          {heroImages.map((image, index) => (
            <ImageWithLoader
              key={index}
              src={image}
              alt={`Cover ${index + 1}`}
              containerClassName={`hero-image-container ${index === currentImageIndex ? 'active' : ''}`}
              className="cover-img"
            />
          ))}
        </div>
        <div className="home-hero-content">
          <h1 className="hero-title-chinese">康奈尔大学中国学生学者联合会</h1>
          <h2 className="hero-title-english">Cornell CSSA</h2>
          <p className="hero-subtitle">Cornell Chinese Students and Scholars Association</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-title">
          <h1 className='about-title-text'>关于CSSA</h1>
        </div>
        <div className="about-content">
          <p className='about-content-text'>
            康奈尔大学中国学生学者联合会，英文简称Cornell CSSA，
            是由康奈尔中国学生群体组成的非盈利性互助服务组织，
            是康奈尔大学唯一受中国驻美使馆认证的社团。
          </p>
        </div>
      </div>

      <div className="events-section">
        <div className="events-header">
          <h1 className='events-title-text'>活动</h1>
        </div>
        <div className="events-description">
          <p className='events-content-text'>
            我们致力于促进康奈尔中国学生群体之间的交流，弘扬中华文化，每年举办如中秋嘉年华、春晚等文化类活动，好声音、运动季等娱乐类活动，以及求职、接机等服务类活动。
          </p>
        </div>

        {/* Events Image Grid Section */}
        <div className="events-grid-section">
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card-container">
                <div className="event-card-inner">
                  {/* Front of the card */}
                  <div className="event-card-front">
                    <ImageWithLoader src={event.image} alt={event.title} className="event-image" />
                  </div>
                  {/* Back of the card */}
                  <div className="event-card-back">
                    <h3 className="event-card-title">{event.title}</h3>
                    {event.link && event.link !== '#' ? (
                      <a href={event.link} className="event-card-button" target="_blank" rel="noopener noreferrer">
                        往期回顾
                      </a>
                    ) : (
                      <button className="event-card-button disabled" disabled>
                        敬请期待
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="events-button" onClick={() => navigate('/events')}>
          了解更多
        </button>
      </div>
      <div className="guide-section">
        <div className="guide-text">
          <h1 className='guide-text-title'>新生手册</h1>
          <p className='guide-text-description'>
            为了帮助刚来到康奈尔的同学尽快适应这里的生活，Cornell CSSA编写整理了新生手册，涵盖了衣、食、住、行、学各方面的指南和攻略，希望对大家有所帮助！
          </p>
          <a 
            href="/files/2024版CSSA新生手册.pdf" 
            download="2024版CSSA新生手册.pdf" 
            className='guide-button'
          >
            点击下载
          </a>
        </div>
        <div className="guide-cover-wrapper">
          <ImageWithLoader 
            src={guideCover} 
            alt="Guide Cover" 
            className="guide-cover" 
            containerClassName="guide-cover-container"
          />
        </div>
      </div>
    </div>
  );
};
