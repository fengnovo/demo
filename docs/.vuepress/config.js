module.exports = {
    title: 'Demo',
    description: 'Demo页面',
    theme: 'reco',
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'fengnovo的Demo页面', 
                items: [
                    { text: 'Github', link: 'https://github.com/fengnovo' },
                ]
            }
        ],
        sidebar: [
            {
                title: '目录',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "Demo目录", path: "/" }
                ]
            },
            {
              title: "前端相关",
              path: '/handbook/typescript',
              collapsable: false,
              children: [
                {
                    title: "框架",
                    path: '/handbook/typescript',
                    collapsable: false,
                    children: [
                      { title: "typescript", path: "/handbook/typescript" },
                      { title: "vue3", path: "/handbook/vue3" },
                      { title: "react", path: "/handbook/react" }
                    ],
                },
                {
                    title: "通讯",
                    path: '/handbook/graphql',
                    collapsable: false,
                    children: [
                      { title: "graphql", path: "/handbook/graphql" },
                    ],
                },
                {
                    title: "nodejs",
                    path: '/handbook/koa',
                    collapsable: false,
                    children: [
                      { title: "koa", path: "/handbook/koa" },
                    ],
                }
              ],
            }
        ]
    },
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
}
