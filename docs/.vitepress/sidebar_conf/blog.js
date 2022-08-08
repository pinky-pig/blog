const commonPath = '/blog';

export default [
    {
        text: 'Note',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'VitePress+GitHub搭建个人博客', link: `${commonPath}/note/VitePressGitHubBlog.md` }, 
            { text: 'PicGo+GitHub搭建个人图床', link: `${commonPath}/note/PicBed.md` }, 
            { text: 'VitePress配置', link: `${commonPath}/note/VitePressConfig.md` }, 
        ]
    },
    {
        text: 'Svg',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Svg animate', link: `${commonPath}/svg/SvgAnimate.md` }, // /guide/two.md
        ]
    },
    {
        text: 'Css',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '三分钟知道js中动态设置css变量的值', link: `${commonPath}/css/CssVariableEdit.md` }, // /guide/two.md
        ]
    },
]
