// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    base: '/TIL/',
    title: "한양노비 준서의 blog",
    description: 'A VitePress site',
    srcDir : mdDir,
    themeConfig: {
        
        sidebar:getSidebar(),
        nav: getNav()
    },
    vite:{
      ssr:{
        format:"cjs",
      }
    },
}

function getRecall(){
  return {  
      text: '회고✨',
      collapsible: true,
      items: [
        { text: '2022년 06월 둘째 주를 회고', link: '/TIL/202206/20220610'},
        { text: '2022년 06월 셋째 주를 회고', link: '/TIL/202206/20220617'},
        { text: '2022년 06월 넷째 주를 회고', link: '/TIL/202206/20220624'},
        { text: '2022년 07월 첫째 주를 회고', link: '/TIL/202207/20220701'},
        { text: '2022년 07월 둘째 주를 회고', link: '/TIL/202207/20220708'},
        { text: '2022년 07월 넷째 주를 회고', link: '/TIL/202207/20220724'},
        { text: '2022년 07월 마지막 주를 회고', link: '/TIL/202207/20220731'},
        { text: '2022년 08월 첫째 주를 회고', link: '/TIL/202208/20220807'},
        { text: '2022년 08월 둘째 주를 회고', link: '/TIL/202208/20220814'},
        { text: '2022년 08월 셋째 주를 대충 회고', link: '/TIL/202208/20220821'},
      ]
    };
}

function get06TIL(){
  return{
    text: 'TIL',
    collapsible: true,
    items: [

      { text: '2022/06/08', link: '/TIL/202206/20220608'},
      { text: '2022/06/09', link: '/TIL/202206/20220609'},
      { text: '2022/06/10✨', link: '/TIL/202206/20220610'},
      { text: '2022/06/11', link: '/TIL/202206/20220611'},
      { text: '2022/06/12', link: '/TIL/202206/20220612'},
      { text: '2022/06/13', link: '/TIL/202206/20220613'},
      { text: '2022/06/14', link: '/TIL/202206/20220614'},
      { text: '2022/06/15', link: '/TIL/202206/20220615'},
      { text: '2022/06/16', link: '/TIL/202206/20220616'},
      { text: '2022/06/17✨', link: '/TIL/202206/20220617'},
      { text: '2022/06/18', link: '/TIL/202206/20220618'},
      { text: '2022/06/19', link: '/TIL/202206/20220619'},
      { text: '2022/06/20', link: '/TIL/202206/20220620'},
      { text: '2022/06/21', link: '/TIL/202206/20220621'},
      { text: '2022/06/22', link: '/TIL/202206/20220622'},
      { text: '2022/06/23', link: '/TIL/202206/20220623'},
      { text: '2022/06/24✨', link: '/TIL/202206/20220624'},
      { text: '2022/06/25', link: '/TIL/202206/20220625'},
      { text: '2022/06/26', link: '/TIL/202206/20220626'},
      { text: '2022/06/27', link: '/TIL/202206/20220627'},
      { text: '2022/06/28', link: '/TIL/202206/20220628'},
    ]
  }
}

function get07TIL(){
  return {
    text: 'TIL',
    collapsible: true,
    items: [
      {text: '2022/07/01✨', link: '/TIL/202207/20220701'},
      {text: '2022/07/02', link: '/TIL/202207/20220702'},
      {text: '2022/07/03', link: '/TIL/202207/20220703'},
      {text: '2022/07/04', link: '/TIL/202207/20220704'},
      {text: '2022/07/05', link: '/TIL/202207/20220705'},
      {text: '2022/07/06', link: '/TIL/202207/20220706'},
      {text: '2022/07/07', link: '/TIL/202207/20220707'},
      {text: '2022/07/08✨', link: '/TIL/202207/20220708'},
      {text: '2022/07/09', link: '/TIL/202207/20220709'},
      {text: '2022/07/10', link: '/TIL/202207/20220710'},
      {text: '2022/07/11', link: '/TIL/202207/20220711'},
      {text: '2022/07/12', link: '/TIL/202207/20220712'},
      {text: '2022/07/13', link: '/TIL/202207/20220713'},
      {text: '2022/07/14', link: '/TIL/202207/20220714'},
      {text: '2022/07/15', link: '/TIL/202207/20220715'},
      {text: '2022/07/16', link: '/TIL/202207/20220716'},
      {text: '2022/07/17', link: '/TIL/202207/20220717'},
      {text: '2022/07/18', link: '/TIL/202207/20220718'},
      {text: '2022/07/19', link: '/TIL/202207/20220719'},
      {text: '2022/07/20', link: '/TIL/202207/20220720'},
      {text: '2022/07/21', link: '/TIL/202207/20220721'},
      {text: '2022/07/22', link: '/TIL/202207/20220722'},
      {text: '2022/07/23', link: '/TIL/202207/20220723'},
      {text: '2022/07/24✨', link: '/TIL/202207/20220724'},
      {text: '2022/07/25', link: '/TIL/202207/20220725'},
      {text: '2022/07/26', link: '/TIL/202207/20220726'},
      {text: '2022/07/27', link: '/TIL/202207/20220727'},
      {text: '2022/07/28', link: '/TIL/202207/20220728'},
      {text: '2022/07/29', link: '/TIL/202207/20220729'},
      {text: '2022/07/30', link: '/TIL/202207/20220730'},
      {text: '2022/07/31✨', link: '/TIL/202207/20220731'},
    ]
  }
}
function get08TIL(){
  return {
    text: 'TIL',
    collapsible: true,
    items: [
      {text: '2022/08/01', link: '/TIL/202208/20220801'},
      {text: '2022/08/02', link: '/TIL/202208/20220802'},
      {text: '2022/08/03 ', link: '/TIL/202208/20220803'},
      {text: '2022/08/04 ', link: '/TIL/202208/20220804'},
      {text: '2022/08/05 ', link: '/TIL/202208/20220805'},
      {text: '2022/08/06 ', link: '/TIL/202208/20220806'},
      {text: '2022/08/07✨', link: '/TIL/202208/20220807'},
      {text: '2022/08/08 ', link: '/TIL/202208/20220808'},
      {text: '2022/08/09 ', link: '/TIL/202208/20220809'},
      {text: '2022/08/10 ', link: '/TIL/202208/20220810'},
      {text: '2022/08/11 ', link: '/TIL/202208/20220811'},
      {text: '2022/08/12 ', link: '/TIL/202208/20220812'},
      {text: '2022/08/13 ', link: '/TIL/202208/20220813'},
      {text: '2022/08/14✨', link: '/TIL/202208/20220814'},
      {text: '2022/08/15', link: '/TIL/202208/20220815'},
      {text: '2022/08/16', link: '/TIL/202208/20220816'},
      {text: '2022/08/17', link: '/TIL/202208/20220817'},
      {text: '2022/08/18', link: '/TIL/202208/20220818'},
      {text: '2022/08/19', link: '/TIL/202208/20220819'},
      {text: '2022/08/20', link: '/TIL/202208/20220820'},
      {text: '2022/08/21✨', link: '/TIL/202208/20220821'},
      {text: '2022/08/22', link: '/TIL/202208/20220822'},
      {text: '2022/08/23', link: '/TIL/202208/20220823'},
      {text: '2022/08/24', link: '/TIL/202208/20220824'},
      
     
    ]
  }
}
function get09TIL(){
  return {
    text: 'TIL',
    collapsible: true,
    items: [
      {text: '2022/09/01', link: '/TIL/202209/20220901'},
      {text: '2022/09/02', link: '/TIL/202209/20220902'},
      {text: '2022/09/03', link: '/TIL/202209/20220903'},
      
      
     
    ]
  }
}

function getDaily(){
  return {
    text: '일상⏰',
    collapsible: true,
    items: [
      {text: '대회 끝나고', link: '/Daily/afterSkills'},
      {text: '소도시인들 상경하다', link: '/Daily/Daily1'},
      {text: '토트넘 VS 세비아', link: '/Daily/Daily2'},
    ]
  }
}

function getSidebar(){
  return {
    '/TIL/202206':[
      get06TIL()
      ,
      getRecall(),
    ],
    '/TIL/202207':[
      get07TIL()
      ,
      getRecall(),
    ],
    '/TIL/202208':[
      get08TIL()
      ,
      getRecall(),
    ],
    '/TIL/202209':[
      get09TIL()
      ,
      getRecall(),
    ],
    
    '/Daily/':[
      getDaily(),
    ],
    '/webskills/':[
      {
        text:'WEBSKILLS',
        collapsible:true,
        items:[
          { text:'문제정리', link:'/webskills/problemRank' }
        ]
      }
    ],
    "/":[
      {
        text: 'TIL📖',
        collapsible: true,
        items: [
          { text: '2022년06월', link: '/TIL/202206/202206'},
          { text: '2022년07월', link: '/TIL/202207/202207'},
          { text: '2022년08월', link: '/TIL/202208/202208'},
          { text: '2022년09월', link: '/TIL/202209/202209'},
        ]
      },
      getRecall(),
      {
        text: '기능대회💻',
        collapsible: true,
        items: [
          {text: '문제정리', link: '/webskills/problemRank'}
        ]
      },
      getDaily(),
  ],
  };
}
function getNav(){
  return [
    {
      text:'TIL',
      link:"/TIL/202206/20220608",
      activeMatch: "/TIL/",
    },
    {
      text: 'Menu',
      items: [
        {
          text:'TIL',
          link:"/TIL/202206/202206",
          activeMatch: "/TIL/",
        },
        {
          text:'회고',
          link:"/TIL/202206/20220608",
          activeMatch: "/TIL/",
        },
        {
          text:'기능경기대회',
          link:"/webskills/problemRank",
          activeMatch: "/webskills/",
        },
      ]
    }
  ]
}
