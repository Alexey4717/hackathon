<template>
  <div :class="$style.block">
    <img :class="$style.image" :src="icon" :alt="title" />
    <span :class="$style.title">{{ title }}</span>
    <span :class="$style.role">{{ role }}</span>
  </div>
</template>

<script>
export default {
  name: "participant",
  props: {
    icon: String,
    title: String,
    role: String,
  },
};
</script>

<style lang="scss" module>
.block {
  width: 350px;
  text-align: center;
  padding-top: 70px;
}

.image {
  max-width: 90%;
  object-fit: cover;
  min-height: 60px;
  max-height: 160px;
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
