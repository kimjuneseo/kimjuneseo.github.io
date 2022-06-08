export default {
    base: '/TIL/',
    title: "김준서 블로그",
    description: 'A VitePress site',
    themeConfig: {
        logo: 'https://avatars.githubusercontent.com/u/70473267?v=4',
        sidebar: [
            {
              text: 'SDHS',
              collapsible: true,
              items: [
                { text: '0608', link: '/sdhs/0608'},
                { text: '0609', link: '/sdhs/0609'},
                { text : '우하하하하', items:[
                    { text:'난준서' , link:'/sdhs/우하하하하하하/난준서'}   
                ]}
              ]
            }
        ]
    },
}