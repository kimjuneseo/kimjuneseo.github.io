<template>
  <div ref="comment" style=" margin: 120px 0px 0px 0px;"></div>
</template>
<script>
export default {
  mounted() {
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://utteranc.es/client.js";

    utterances.setAttribute("issue-term", "pathname"); 
    utterances.setAttribute("theme", "photon-dark"); 
    utterances.setAttribute("repo", `kimjuneseo/blog-comment`); 

    this.$refs.comment.appendChild(utterances);
  }
};
</script>