import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    base: '/kivi/',
    title: "KIVI",
    description: "User guide for kivi crate",
    head: [['link', {rel: 'icon', href: '/KiviSmall.webp'}]],
    themeConfig: {
        logo: '/KiviSmall.webp',
        nav: [
            {
                text: 'Guide',
                items: [
                    {text: 'Chapter 1', link: '/chapter-1'},
                    {text: 'Chapter 2', link: '/chapter-2'},
                    {text: 'Chapter 3', link: '/chapter-3'},
                    {text: 'Chapter 4', link: '/chapter-4'},
                    {text: 'Chapter 5', link: '/chapter-5'},
                    {text: 'Chapter 6', link: '/chapter-6'},
                    {text: 'Chapter 7', link: '/chapter-7'},
                    {text: 'Chapter 8', link: '/chapter-8'},
                    {text: 'Chapter 9', link: '/chapter-9'},
                    {text: 'Chapter 10', link: '/chapter-10'}
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Chapter 1', link: '/chapter-1'},
                    {text: 'Chapter 2', link: '/chapter-2'},
                    {text: 'Chapter 3', link: '/chapter-3'},
                    {text: 'Chapter 4', link: '/chapter-4'},
                    {text: 'Chapter 5', link: '/chapter-5'},
                    {text: 'Chapter 6', link: '/chapter-6'},
                    {text: 'Chapter 7', link: '/chapter-7'},
                    {text: 'Chapter 8', link: '/chapter-8'},
                    {text: 'Chapter 9', link: '/chapter-9'},
                    {text: 'Chapter 10', link: '/chapter-10'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/EngosSoftware/kivi'}
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
