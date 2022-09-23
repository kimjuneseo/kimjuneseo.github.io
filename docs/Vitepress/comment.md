---
title: "[Vitepress] Utterances로 댓글 기능 만들기"
createBy: 2022-09-20
---

<br>

---
<!-- 
<br>

#### Utterances는 Github issue를 기반으로 댓글을 작성할 수 있게 해주고 무엇보다 사용방법이 간단한 플러그인이다.
<br>


## 1. 깃허브 퍼블릭 레포지토리(GitHub Public Repository) 생성
---
 먼저 댓글을 저장할 깃 허브 퍼블릭 레포지토리(GitHub Public Repository) 생성헤줍니다.


<br>
<br>

# 2. 댓글 컴포넌트 추가
--- -->

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

<br>

## Reference
---

- [vuepress + utterances (블로그에 github 댓글 추가하기)](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/#utterances-%E1%84%85%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%B3-%E1%84%80%E1%85%A5%E1%86%AF-%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%86%B8-%E1%84%85%E1%85%B5%E1%84%91%E1%85%A9-%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC)


- [Vuepress + Utterances](https://junilhwang.github.io/TIL/Vuepress/Utterances)


<Comment />