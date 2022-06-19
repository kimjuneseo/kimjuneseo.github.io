export default {
    base: '/TIL/',
    title: "김준서 블로그",
    description: 'A VitePress site',
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/70473267?v=4',
        sidebar: [
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
              ]
            }
        ]
    },
}
