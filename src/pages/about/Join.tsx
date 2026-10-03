import { Fragment } from 'react';
import ImageWithLoader from '../../components/ImageWithLoader';
import { useSiteContent } from '../../content/ContentProvider';
import { resolveMedia } from '../../content/media';

// 二维码沿用原来的两套样式类（公众号 / 小助手），按顺序轮流套用。
const QR_CLASS_NAMES = [
    { image: 'gongzhonghao-img', container: 'qr-container-gongzhonghao' },
    { image: 'xiaozhushou-img', container: 'qr-container-xiaozhushou' },
];

export default function Join() {
    const { join } = useSiteContent().about;
    return (
        <div className="join-outer-container">
            <div className="join-container">
                <div className="join-content">
                    <h2>{join.heading}</h2>
                    {join.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <button 
                        className="join-button"
                        onClick={() => window.open(join.link, '_blank', 'noopener,noreferrer')}
                    >
                        了解更多
                    </button>
                </div>
                <div className="contact-container">
                    {join.qrCodes.map((qrCode, index) => {
                        const classNames = QR_CLASS_NAMES[index % QR_CLASS_NAMES.length];
                        return (
                            <Fragment key={index}>
                                <h4>{qrCode.label}</h4>
                                <ImageWithLoader 
                                    src={resolveMedia(qrCode.image)} 
                                    alt={qrCode.label} 
                                    className={classNames.image} 
                                    containerClassName={classNames.container}
                                />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
