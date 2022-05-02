<template>
  <Header />
  <div class="container" :class="$style.wrapper">
    <slot />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeComponent",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" module>
.wrapper {
  padding: 40px 0;
}
</style>