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
                { text: '2022/06/08', link: '/sdhs/20220608'},
                { text: '2022/06/09', link: '/sdhs/20220609'},
                { text: '2022/06/10', link: '/sdhs/20220610'},
                { text: '2022/06/11', link: '/sdhs/20220611'},
              ]
            }
        ]
    },
}