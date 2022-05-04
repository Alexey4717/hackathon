<template>
  <footer :class="$style.wrapper">
    <div class="container">
      <router-link to="/">
        <logo-icon />
      </router-link>
    </div>
  </footer>
</template>

<script>
import LogoIcon from "@/components/icons/LogoIcon"

export default {
  name: 'Footer',
  components: {
    LogoIcon
  }
}
</script>

<style lang="scss" module>
.wrapper {
  background-color: black;
  padding: 13px 0;
}
</style>
