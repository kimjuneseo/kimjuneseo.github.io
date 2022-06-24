// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    base: '/TIL/',
    title: "김준서 블로그",
    description: 'A VitePress site',
    srcDir : mdDir,
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/70473267?v=4',
        sidebar:getSidebar(),
        nav: getNav()
    },
}

function getSidebar(){
  return {
    '/sdhs/':[
      {
        text: 'TIL',
        collapsible: true,
        items: [
          { text: '2022_06_08', link: '/sdhs/20220608'},
          { text: '2022_06_09', link: '/sdhs/20220609'},
          { text: '2022_06_10', link: '/sdhs/20220610'},
          { text: '2022_06_11', link: '/sdhs/20220611'},
          { text: '2022_06_12', link: '/sdhs/20220612'},
          { text: '2022_06_13', link: '/sdhs/20220613'},
          { text: '2022_06_14', link: '/sdhs/20220614'},
          { text: '2022_06_15', link: '/sdhs/20220615'},
          { text: '2022_06_16', link: '/sdhs/20220616'},
          { text: '2022_06_17', link: '/sdhs/20220617'},
          { text: '2022_06_18', link: '/sdhs/20220618'},
          { text: '2022_06_19', link: '/sdhs/20220619'},
          { text: '2022_06_20', link: '/sdhs/20220620'},
          { text: '2022_06_21', link: '/sdhs/20220621'},
          { text: '2022_06_22', link: '/sdhs/20220622'},
        ]
      },
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
        text: 'TIL',
        collapsible: true,
        items: [
          { text: '2022_06_08', link: '/sdhs/20220608'},
          { text: '2022_06_09', link: '/sdhs/20220609'},
          { text: '2022_06_10', link: '/sdhs/20220610'},
          { text: '2022_06_11', link: '/sdhs/20220611'},
          { text: '2022_06_12', link: '/sdhs/20220612'},
          { text: '2022_06_13', link: '/sdhs/20220613'},
          { text: '2022_06_14', link: '/sdhs/20220614'},
          { text: '2022_06_15', link: '/sdhs/20220615'},
          { text: '2022_06_16', link: '/sdhs/20220616'},
          { text: '2022_06_17', link: '/sdhs/20220617'},
          { text: '2022_06_18', link: '/sdhs/20220618'},
          { text: '2022_06_19', link: '/sdhs/20220619'},
          { text: '2022_06_20', link: '/sdhs/20220620'},
          { text: '2022_06_21', link: '/sdhs/20220621'},
          { text: '2022_06_22', link: '/sdhs/20220622'},
        ]
      },
      {
        text: '회고',
        collapsible: true,
        items: [
          { text: '2022_06_10', link: '/sdhs/20220610'},
          { text: '2022_06_17', link: '/sdhs/20220617'},
        ]
      },
      {
        text: '기능대회',
        collapsible: true,
        items: [
          {text: '문제정리', link: '/webslis/problemRank'}
        ]
      }
  ],
  };
}
function getNav(){
  return [
    {
      text:'sdhs',
      link:"/sdhs/20220608",
      activeMatch: "/sdhs/",
    },
    {
      text: 'Dropdown Menu',
      items: [
        {
          text:'TIL',
          link:"/sdhs/20220608",
          activeMatch: "/sdhs/",
        },
        {
          text:'회고',
          link:"/sdhs/20220608",
          activeMatch: "/sdhs/",
        },
        {
          text:'기능__살일__경기대회',
          link:"/webskills/problemRank",
          activeMatch: "/webskills/",
        },
      ]
    }
  ]
}