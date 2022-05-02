<template>
  <div :class="$style.wrapper">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="logo" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" module>
.wrapper {
  background-color: var(--primary);
  padding: 13px 0;
}
</style>