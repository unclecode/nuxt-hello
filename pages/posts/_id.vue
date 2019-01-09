<template>
  <div class="container">
    <article>
      <h1 class="title">{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </article>
    <aside>
      <h3>related posts</h3>

      <ul>
        <li v-for="post in relatedPosts" :key="post.id">
          <!-- <a :href="`/posts/${post.id}`">{{post.title}}</a> -->
          <nuxt-link :to="{name:'posts-id', params: {id: post.id}}">{{post.title}}</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {name:'twitter:title', content: this.post.title},
        {name:'twitter:description', content: this.post.content},
        {name:'description', content: this.post.content}
      ]
    };
  },
  computed: {
    post() {
      return this.$store.state.posts.all.find(p => p.id === this.id);
    },
    relatedPosts() {
      return this.$store.state.posts.all.filter(p => p.id !== this.id);
    }
  }
};
</script>

<style scoped>
</style>