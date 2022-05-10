import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    ssr: false,
    app: {
        head: {
            title: 'Teun Engels',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Persoonlijke website van Teun Engels',
                },
                { name: 'theme-color', content: '#00C9FF' },
                { content: 'IE=edge', httpEquiv: 'X-UA-Compatible' },
                { property: 'og:site_name', content: 'Teun Engels' },
                { property: 'author', content: 'Teun Engels' },
                { property: 'og:locale', content: 'nl_NL' },
                { property: 'og:type', content: 'website' },
                {
                    property: 'og:title',
                    content: 'Teun Engels',
                },
                {
                    property: 'og:description',
                    content: 'Persoonlijke website van Teun Engels',
                },
                { property: 'og:url', content: 'https://teunengels.nl' },
                { name: 'robots', content: 'all, index, follow' },
                {
                    name: 'keywords',
                    property: 'keywords',
                    content: 'portfolio, teun, personal, persoonlijk, nederlands, Teun',
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
                    integrity:
                        'sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==',
                    crossorigin: 'anonymous',
                    referrerpolicy: 'no-referrer',
                },
            ],
        },
    },
    css: ['@/assets/Styles/global.css'],

})
