<template>
  <router-link :to="{ name: link }">
    {{ link }}
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    link: String,
  },
};
</script>


