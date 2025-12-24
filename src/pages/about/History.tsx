import './About.css';
import historyImage from '../../assets/about-history.jpg';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function History() {
    return (
        <div className="history-outer-container">
            <div className="history-container">
                <div className="history-timeline">
                    <h2 className="history-heading">CSSA历史</h2>
                    <div className="timeline-entry">
                        <div className="timeline-year">1904</div>
                        <div className="timeline-content">
                            晚清中国留学生自发组织的“Cornell Chinese Student Club”。该组织在清政府派遣大量庚子赔款留学生赴美后发展壮大。
                        </div>
                    </div>
                    <div className="timeline-divider"></div>
                    
                    <div className="timeline-entry">
                        <div className="timeline-year">1950</div>
                        <div className="timeline-content">
                            朝鲜战争之后，来自中国大陆的留美学生基本绝迹，Chinese Student Club逐渐演变成为了以美籍华人为主的学生组织Cornell CSA。
                        </div>
                    </div>
                    <div className="timeline-divider"></div>
                    
                    <div className="timeline-entry">
                        <div className="timeline-year">1980</div>
                        <div className="timeline-content">
                            随着中美建交与改革开放，来自中国大陆的留学生重新出现在康奈尔大学。
                        </div>
                    </div>
                    <div className="timeline-divider"></div>
                    
                    <div className="timeline-entry">
                        <div className="timeline-year">1982</div>
                        <div className="timeline-content">
                            在当时的公派留学生和中国驻纽约总领馆的努力之下，康奈尔大学中国学生学者联谊会（Cornell CSSA）成立。
                        </div>
                    </div>
                    <div className="timeline-divider"></div>
                    
                    <div className="timeline-entry">
                        <div className="timeline-year">21世纪</div>
                        <div className="timeline-content">
                            随着中国学生人数的增加，联谊会更名为联合会，采取了主席团制度，形成了主席团服务其他中国学生的模式，最终形成了今天学联的架构。
                        </div>
                    </div>
                </div>
                <div className="history-image">
                    <ImageWithLoader 
                        src={historyImage} 
                        alt="CSSA历史" 
                        containerClassName="history-image-container"
                    />
                </div>
            </div>
        </div>
    );
}