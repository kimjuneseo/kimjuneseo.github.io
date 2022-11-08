// // .vitepress/theme/index.js
import Theme from "vitepress-simple-theme";
import Comment from '../components/Comment.vue'


export default {
    ...Theme,

    enhanceApp({ app }) {
      app.component('Comment', Comment)
    }
}