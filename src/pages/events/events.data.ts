import upcomingEventChunwan from '../../assets/events-upcoming-chunwan.jpg';
import eventsZhongqiu from '../../assets/events-zhongqiu.jpeg';
import eventsHaoshengyin from '../../assets/events-haoshengyin.jpeg';
import eventsChunwan from '../../assets/events-chunwan.jpg';
import eventsYundongji from '../../assets/events-yundongji.jpg';
import upcomingEventCP from '../../assets/events-CP.png';
import eventsXinsheng from '../../assets/events-xinsheng.jpg';
import { EventDataObject, UpcomingEventDataObject } from './event.type';

export const upcomingEventData: UpcomingEventDataObject[] = [
  {
    title: 'CSSA 2026 马年春晚',
    time: "2026/1/31",
    location: 'Bailey Hall',
    image: upcomingEventChunwan,
    link: 'https://vivenu.com/event/2026-cornell-cssa-year-of-the-horse-spring-festi-1wabvf',
  },
  {
    title: '情人节限定！一周CP',
    time: "2026/2",
    location: '线上活动',
    image: upcomingEventCP,
    link: '#',
  },
];

export const eventsData: EventDataObject[] = [
  {
    title: '中秋嘉年华',
    time: "10月",
    description: '但愿人长久，千里共婵娟。每年的中秋嘉年华是康村秋季学期最为盛大的中华传统活动，有猜灯谜、写书法等中华传统项目；有月饼、奶茶等中国特色美食。中秋嘉年华让五湖四海的中国学生一同沉浸在浓浓的中秋氛围中。',
    image: eventsZhongqiu,
    orientation: 'left',
    link: 'https://mp.weixin.qq.com/s/YZ2qmgHP29AeaEnPpKt80Q',
  },
  {
    title: '康村好声音',
    time: "11月",
    description: '康村好声音是秋季学期最具活力的校园舞台之一，聚光灯下汇聚了热望与赤子心，每一位同学都用歌声书写着自己的青春篇章。这里有少年时代心动的回声，也有并肩同行的挚友把陪伴与回忆唱进旋律。康村好声音让有着不同故事的我们汇聚在同一个舞台，共同感受青春的力量与温度。',
    image: eventsHaoshengyin,
    orientation: 'right',
    link: 'http://xhslink.com/o/9DfQ1zTo88c',
  },
  {
    title: '春晚',
    time: "2月左右",
    description: '春晚是康村每年最为热闹的大型晚会。CSSA用自己的春晚将我们康村华人大家庭聚集在一起，为大家带来“传统与现代结合，东方与西方碰撞”的文化盛宴，让大家在异国他乡开开心心过大年。',
    image: eventsChunwan,
    orientation: 'left',
    link: 'https://mp.weixin.qq.com/s/_0rCBHrL8SIHFgrnPPDwAg',
  },
  {
    title: '运动季',
    time: "3-5月",
    description: 'CSSA的运动季包括足球、篮球、羽毛球、乒乓球、电竞等各类项目，旨在为同学们提供一个锻炼身体、增进友谊的平台。期待与大家在美好的春天里一起挥洒汗水，共享运动的无限乐趣！',
    image: eventsYundongji,
    orientation: 'right',
    link: 'https://mp.weixin.qq.com/s/CJjMq4MCUNfU2NrMsJXm3w',
  },
  {
    title: '新生见面会',
    time: "7月",
    description: 'CSSA 每年暑期都会举办热闹的新生见面会，带着满满的欢迎气息，帮助新同学们更快融入康村、交到新朋友。现场不仅有学长学姐们耐心、真诚的问答交流，大家还会一起聊选课攻略、抢热门课的小技巧、以及各种社团的精彩安利。',
    image: eventsXinsheng,
    orientation: 'left',
    link: 'https://mp.weixin.qq.com/s/OhopG7Us-s9E_NYsf6Q0RA',
  },
];


