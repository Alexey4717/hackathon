<script setup>
import MainLayout from "@/layouts/MainLayout.vue"

</script>

<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<style lang="scss" module>
.image {
  &:nth-child(1) {
    width: var(--blockWidth);
  }

  @include lg {
    width: 10px;
  }
}

#app {
  font-family: Roboto, sans-serif;
}

@include lg {
  * {
    color: red;
  }

  .image {
    &:nth-child(1) {
      width: 10px;
    }
  }
}
</style>
