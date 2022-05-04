<template>
  <header :class="$style.wrapper">
    <div class="container">
      <router-link to="/">
        <logo-icon />
      </router-link>
    </div>
  </header>
</template>

<script>
import LogoIcon from "@/components/icons/LogoIcon"
export default {
  name: "Header",
  components: {
    LogoIcon
  }
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: var(--primary);
  padding: 13px 0;
}
</style>