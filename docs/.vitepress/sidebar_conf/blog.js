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
            { text: 'svg animate', link: `${commonPath}/svg/a.md` }, // /guide/two.md
        ]
    }
]
