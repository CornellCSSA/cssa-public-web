import upcomingEventChunwan from '../../assets/events-upcoming-chunwan.jpg';
import eventsZhongqiu from '../../assets/events-zhongqiu.jpeg';
import { EventDataObject, UpcomingEventDataObject } from './event.type';

export const upcomingEventData: UpcomingEventDataObject[] = [
  {
    title: 'CSSA 2026 马年春晚',
    time: "2026/1/31",
    location: 'Bailey Hall',
    image: upcomingEventChunwan,
    link: 'https://mp.weixin.qq.com/s/gsYmkCZQ7P2PslK_YVYM_A',
  },
];

export const eventsData: EventDataObject[] = [
  {
    title: '中秋嘉年华',
    time: "10月",
    description: '但愿人长久，千里共婵娟。每年的中秋嘉年华是康村秋季学期最为盛大的中华传统活动，有猜灯谜、写书法等中华传统项目；有月饼、奶茶等中国特色美食。中秋嘉年华让五湖四海的中国学生一同沉浸在浓浓的中秋氛围中。',
    image: eventsZhongqiu,
    orientation: 'left',
    link: 'https://mp.weixin.qq.com/s/HD_I8HDksHaDHthbJbGl-w',
  },
];
