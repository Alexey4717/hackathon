<template>
<div :class="$style.block">
  {{ icon }}
  <span :class="$style.title">{{ title }}</span>
  <span :class="$style.role">{{ role }}</span>
</div>
</template>

<script>
export default {
  name: "participant",
  props: {
    icon: Object,
    title: String,
    role: String
  }
}
</script>

<style lang="scss" module>
.block {
  width: 350px;
  text-align: center;
  padding-top: 70px;
}

.title {
  display: block;
  font-size: 32px;
  color: var(--secondary-text);
}

.role {
  font-size: 20px;
  font-weight: bold;
}
</style>
