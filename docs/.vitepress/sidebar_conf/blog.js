const commonPath = '/blog';

export default [
    {
        text: 'Note',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'vitePress+github搭建个人博客', link: `${commonPath}/note/vitePressGithubBlog.md` }, // /guide/index.md
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
