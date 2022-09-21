---
title: "[Vitepress] utterances로 댓글 기능 추가하기 (feat. utterances + vitepress)"
createBy: 2022-09-20
---


### 1. 댓글 컴포넌트 추가

<br>

#### .vitepress/compoents/Comment.vue 

```js
<template>
  <div ref="comment" style=" margin: 120px 0px 0px 0px;"></div>
</template>
<script>
export default {
  mounted() {
    // script tag 생성
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://utteranc.es/client.js";

    utterances.setAttribute("issue-term", "pathname"); // pathname|url|title|og:title 중 택 1
    utterances.setAttribute("theme", "photon-dark"); // theme 설정 (github-light, github-dark, preferred-color-scheme github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light) 중 하나 선택
    utterances.setAttribute("repo", `ex)hongkildong/blog-comment`); // 주의!! 사용할 repository

    this.$refs.comment.appendChild(utterances);
  }
};
</script>

```