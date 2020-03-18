<template>
  <div>
    <nav class="navbar header" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 class="title is-3">Nate Palmer</h1>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" />
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "account",
          to: { name: "index" }
        },
        {
          title: "Resume",
          icon: "briefcase",
          to: { name: "resume" }
        },
        {
          title: "Blog",
          icon: "file",
          to: { name: "posts" }
        }
      ]
    };
  }
};
</script>
