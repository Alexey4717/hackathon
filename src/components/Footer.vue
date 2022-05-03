<template>
  <footer :class="$style.wrapper">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="logo" />
      </router-link>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style lang="scss" module>
.wrapper {
  background-color: black;
  padding: 13px 0;
}
</style>
