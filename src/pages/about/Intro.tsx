import './About.css';
import groupPhoto from '../../assets/group-photo.jpg';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-image">
                <ImageWithLoader 
                    src={groupPhoto} 
                    alt="CSSA简介" 
                    containerClassName="intro-image-container"
                />
            </div>
            <div className="intro-content">
                <h2 className="intro-heading">CSSA简介</h2>
                <p>
                    康奈尔大学中国学生学者联合会（Cornell CSSA）是由康奈尔大学的中国学生、学者及教职员工组成的非盈利性互助组织。
                </p>
                <p>
                    Cornell CSSA以服务全体中国学生学者为本，定期发布有效资讯和指南，提供新生接机和见面会等服务，为中国留学生搭建沟通交流的平台，便利同学们在康奈尔的学习和生活，助力升学与求职。
                </p>
                <p>
                    Cornell CSSA以丰富全体中国学生学者生活为要，每年举办如春晚、中秋嘉年华、康村好声音、康村运动季等丰富有趣的活动，向世界各国的同学弘扬中华文化。
                </p>
            </div>
        </div>
    );
}