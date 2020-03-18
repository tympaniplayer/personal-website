<template>
  <section class="section">
    <div class="container">
      <component :is="singlePostComponent" />
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
      return {
        title: post.attributes.title,
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>