<template>
  <div :class="$style.block">
    <PointIcon />
    <span :class="$style.heading">{{ heading }}</span>
    <p :class="$style.description">{{ description }}</p>
  </div>
</template>

<script>
import PointIcon from "@/components/icons/PointIcon"

export default {
  name: "ParticipationItem",
  components: {
    PointIcon
  },
  props: {
    heading: String,
    description: String
  }
}
</script>

<style lang="scss" module>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
}

.heading {
  font-size: 19px;
  font-weight: bold;
  color: var(--secondary-text);
  text-align: center;
  padding-bottom: 30px;
}

.description {
  font-size: 18px;
  text-align: justify;
}
</style>
