<template>
  <div class="container">
    <TheNav/>
    <nuxt/>
  </div>
</template>

<script>
import TheNav from "@/components/TheNav";

export default {
  components: {
    TheNav
  }
};
</script>