import gongzhonghao from '../../assets/about-gongzhonghao-qr.png';
import xiaozhushou from '../../assets/about-xiaozhushou-qr.png';
import ImageWithLoader from '../../components/ImageWithLoader';

export default function Join() {
    return (
        <div className="join-outer-container">
            <div className="join-container">
                <div className="join-content">
                    <h2>加入E-Board</h2>
                    <p>
                        Cornell CSSA E-Board 欢迎所有热爱学生工作、有想法、且善于合作的康奈尔同学申请加入。申请人要求可以流利使用中文。申请时需提交个人简历，选择第一志愿和第二志愿部门，并且认真回答报名问题。我们期待你的加入！
                    </p>
                    <p>
                        CSSA招新信息预计于每年8月发布，有意向的同学敬请关注Cornell CSSA微信公众号并积极参与新生见面会等活动。如有问题欢迎联系CSSA微信小助手
                    </p>
                    <button 
                        className="join-button"
                        onClick={() => window.open('https://mp.weixin.qq.com/s/qhDfrZjF_ApcIXr3RCyc9A', '_blank', 'noopener,noreferrer')}
                    >
                        了解更多
                    </button>
                </div>
                <div className="contact-container">
                    <h4>CSSA公众号</h4>
                    <ImageWithLoader 
                        src={gongzhonghao} 
                        alt="CSSA公众号" 
                        className="gongzhonghao-img" 
                        containerStyle={{ width: '90px', aspectRatio: '1/1', height: 'auto' }}
                    />
                    <h4>CSSA小助手</h4>
                    <ImageWithLoader 
                        src={xiaozhushou} 
                        alt="CSSA小助手" 
                        className="xiaozhushou-img" 
                        containerStyle={{ width: '160px', aspectRatio: '1/1', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
}