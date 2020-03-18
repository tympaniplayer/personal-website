<template>
  <section class="section">
    <div class="container">
      <h1 class="title">My blog posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.attributes.title">
          <nuxt-link :to="getPermalink(post)">{{
            post.attributes.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
const path = require("path");
export default {
  async asyncData() {
    const resolve = require.context("~/content/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    };
  },
  data() {
    return {
      prefix: "posts"
    };
  },
  methods: {
    getPermalink(post) {
      if (post.attributes.hasOwnProperty("permalink")) {
        return `${this.prefix}/${post.attributes.permalink}`;
      } else {
        return `${this.prefix}/${
          post.meta.resourcePath
            .split("\\")
            .pop()
            .split("/")
            .pop()
            .split(".")[0]
        }`;
      }
    }
  }
};
</script>
