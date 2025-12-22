import zhuxiImage from '../../assets/about-zhuxi.jpg';
import xuanchuanImage from '../../assets/about-xuanchuan.jpg';
import wailianImage from '../../assets/about-wailian.jpg';
import neilianImage from '../../assets/about-neilian.jpg';
import caiwuImage from '../../assets/about-caiwu.jpg';
import mishuImage from '../../assets/about-mishu.jpg';
import { DepartmentDataObject } from './departmentType';

export const departmentsData: DepartmentDataObject[] = [
    {
        name: '主席机构',
        image: zhuxiImage,
        description: '主席机构是CSSA的领导核心，负责制定和执行CSSA的各项决策和计划，由主席、内务副主席、外务副主席组成，任期一年。',
    },
    {
        name: '宣传部',
        image: xuanchuanImage,
        description: '宣传部承担了将组织的活动和想法宣发给校园内外的重要工作。部门任务有活动宣传，公众号管理，公众号推文制作，社交媒体管理，视频剪辑制作，和海报设计等工作。',
    },
    {
        name: '外联部',
        image: wailianImage,
        description: '外联部是CSSA与外界沟通的窗口，负责与各大赞助商以及战略合作伙伴对接；与其他学联和企业沟通策划企校与校间活动，为同学们争取更多职业发展资源。',
    },
    {
        name: '内联部',
        image: neilianImage,
        description: '内联部主要负责CSSA内部成员之间的沟通联络，让大家在CSSA能够玩得开心，加强彼此之间的bonding。具体的工作包括为成员准备生日祝福，安排策划内联活动，组织年度formal等。',
    },
    {
        name: '财务部',
        image: caiwuImage,
        description: '财务部掌管学联的财务大权。对内工作包括统筹规划并制定全年预算；审核各项财务开支并进行账务处理。对外工作包括募集筹措funding资金；完善funding申请白皮书。',
    },
    {
        name: '秘书处',
        image: mishuImage,
        description: '秘书处主要负责CSSA的日常事务并为其他部门提供技术支持。具体工作包括管理CSSA微信小助手账号、维护CSSA官网、统筹安排CSSA日程和记录例会内容等。',
    }
];