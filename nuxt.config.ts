// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap'
        }, 
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        }, 
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com'
        }
      ]
    }
  }
})

