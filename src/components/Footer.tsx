import './Footer.css';
import logo from '../assets/logo_redbackground.jpg';
import WeChat from '../assets/WeChat.svg';
import Instagram from '../assets/Instagram.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import YouTube from '../assets/Youtube.svg';
import Bilibili from '../assets/Bilibili.svg';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="Cornell CSSA Logo" className="logo-img" />
            </div>
            <div className="footer-icons">
                <img src={WeChat} alt="WeChat" className="icon" />
                <img src={Instagram} alt="Instagram" className="icon" />
                <img src={LinkedIn} alt="LinkedIn" className="icon" />
                <img src={YouTube} alt="YouTube" className="icon" />
                <img src={Bilibili} alt="Bilibili" className="icon" />
            </div>
            <div className="footer-text">
                <p>This organization is a registered student organization of Cornell University</p>
                <a href="https://www.cornell.edu/education-employment/" target="_blank" rel="noopener noreferrer">
                    Cornell Equal Education and Employment
                </a>
            </div>
        </div>
    );
}