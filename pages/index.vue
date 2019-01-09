<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">nuxt-hello-world</h1>
      <h2 class="subtitle">My steps befor the Kportal</h2>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :to="{name:'posts-id', params: {id:post.id}}"
          :key="post.id"
          class="button--green"
          style="margin-right:10px"
        >{{post.title}}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'Home Page 🎉',
      meta: [
        { name: "twitter:title", content: 'Awesome home page'},
        { name: "twitter:description", content: 'my training on nuxt'},
        { name: "description", content: 'my training on nuxt' }
      ]
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.all;
    }
  }
};
</script>

<style scoped>

</style>
