import './Footer.css';
import logo from '../assets/logo_redbackground.jpg';
import WeChat from '../assets/WeChat.svg';
import Instagram from '../assets/Instagram.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import YouTube from '../assets/Youtube.svg';
import Bilibili from '../assets/Bilibili.svg';
import { useSiteContent } from '../content/ContentProvider';
import type { SocialPlatform } from '../content/types';

const PLATFORM_ICONS: Record<SocialPlatform, { icon: string; alt: string; className: string }> = {
    wechat: { icon: WeChat, alt: 'WeChat', className: 'icon icon-wechat' },
    instagram: { icon: Instagram, alt: 'Instagram', className: 'icon' },
    youtube: { icon: YouTube, alt: 'YouTube', className: 'icon' },
    linkedin: { icon: LinkedIn, alt: 'LinkedIn', className: 'icon' },
    bilibili: { icon: Bilibili, alt: 'Bilibili', className: 'icon' },
};

export default function Footer() {
    const { footer } = useSiteContent();
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="" className="logo-img" />
            </div>
            <div className="footer-icons">
                {footer.socialLinks.map((link, index) => {
                    const platform = PLATFORM_ICONS[link.platform];
                    if (!platform) return null;
                    return (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            <img src={platform.icon} alt={platform.alt} className={platform.className} />
                        </a>
                    );
                })}
            </div>
            <div className="footer-text">
                <p>{footer.notice}</p>
                <a href={footer.legalLink.url} target="_blank" rel="noopener noreferrer">
                    {footer.legalLink.text}
                </a>
            </div>
        </div>
    );
}
