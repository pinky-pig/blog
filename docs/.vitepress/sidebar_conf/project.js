const commonPath = '/project';

export default [
    {
        text: 'vite',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'a', link: `${commonPath}/a.md` }, 
            { text: 'b', link: `${commonPath}/b.md` }, 
        ]
    },
    {
        text: 'JavaScript',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'c', link: `${commonPath}/c.md` }, 
            { text: 'd', link: `${commonPath}/d.md` } 
        ]
    }
]
