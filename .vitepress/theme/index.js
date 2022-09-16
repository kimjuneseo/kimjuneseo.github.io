// // .vitepress/theme/index.js
import Theme from "vitepress-simple-theme";
import Comment from '../components/Comment.vue'


export default {
    ...Theme,

    enhanceApp({ app, router, siteData }) {
      app.component('Comment', Comment)
    }
}