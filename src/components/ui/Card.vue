<template>
  <router-link :class="$style.block" :to="{ name: link }">
    <img :class="$style.image" :src="image" :alt="header" />
    <div :class="$style.content">
      <h3 :class="$style.heading">{{ header }}</h3>
      <p :class="$style.description">{{ description }}</p>
      <span :class="$style.detail">Подробнее</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    header: String,
    description: String,
    image: String,
    link: String,
  },
};
</script>

<style lang="scss" module>
.block {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 360px;
  border-radius: 4px;
  box-shadow: 0px 0px 0 black;
  margin-top: 24px;
  cursor: pointer;
  &:hover {
    box-shadow: -10px 10px 0 black;
    transform: translate(5px, -5px);
    transition: box-shadow 300ms, transform 300ms;

    & > .image {
      filter: brightness(50%);
    }

    & > .content > .detail {
      visibility: visible;
    }
  }
}

.image {
  width: 100%;
  height: 235px;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
}

.content {
  flex-grow: 1;
  padding: 20px;
  border: 1px solid rgba(63, 63, 68, 0.15);
  border-radius: 0 0 4px 4px;
}

.heading {
  font-weight: bold;
}

.description {
  padding-top: 20px;
  text-align: justify;
}

.detail {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-weight: bold;
  visibility: hidden;
}
</style>
