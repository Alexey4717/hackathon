<template>
  <Header />
  <main class="container">
    <slot />
  </main>
  <Footer />
  <top-button-icon />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TopButtonIcon from "@/components/icons/TopButtonIcon"

export default {
  name: "HomeComponent",
  components: {
    Header,
    Footer,
    TopButtonIcon
  },
};
</script>