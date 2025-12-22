import './Home.css'; // Importing from the styles folder

// Importing images
import cover2 from '../../assets/cover2.jpg';
import homeEvent1 from '../../assets/home-events-1.jpg';
import homeEvent2 from '../../assets/home-events-2.jpg';
import homeEvent3 from '../../assets/home-events-3.jpg';
import homeEvent4 from '../../assets/home-events-4.jpg';
import homeEvent5 from '../../assets/home-events-5.jpg';
import homeEvent6 from '../../assets/home-events-6.jpg';

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
  { id: 6, image: homeEvent6, title: '一周CP', link: 'https://mp.weixin.qq.com/s/2rvSOxCezqsG-8XQK3zVKA' },
];

export default function Home () {
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="home-hero-background">
          <img src={cover2} alt="Cover" className="cover-img" />
        </div>
        <div className="hero-content">
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
                    <img src={event.image} alt={event.title} className="event-image" />
                  </div>
                  {/* Back of the card */}
                  <div className="event-card-back">
                    <h3 className="event-card-title">{event.title}</h3>
                    <a href={event.link} className="event-card-button" target="_blank" rel="noopener noreferrer">
                      往期回顾
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="events-button">
          了解更多
        </button>
      </div>
    </div>
  );
};
