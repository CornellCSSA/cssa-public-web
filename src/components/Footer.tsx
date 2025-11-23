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
                <a href="https://mp.weixin.qq.com/s/xniFcQpcN1gqwwXYUaqjKw" target="_blank" rel="noopener noreferrer">
                    <img src={WeChat} alt="WeChat" className="icon icon-wechat" />
                </a>
                <a href="https://www.instagram.com/cu_cssa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" className="icon" />
                </a>
                <a href="https://www.linkedin.com/company/cornell-cssa/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" className="icon" />
                </a>
                <a href="https://www.youtube.com/@cornellcssa4014" target="_blank" rel="noopener noreferrer">
                    <img src={YouTube} alt="YouTube" className="icon" />
                </a>
                <a href="https://space.bilibili.com/402043142?spm_id_from=333.337.0.0" target="_blank" rel="noopener noreferrer">
                    <img src={Bilibili} alt="Bilibili" className="icon icon-bilibili" />
                </a>
            </div>
            <div className="footer-text">
                <p>This organization is a registered student organization of Cornell University</p>
                <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment" target="_blank" rel="noopener noreferrer">
                    Cornell Equal Education and Employment
                </a>
            </div>
        </div>
    );
}