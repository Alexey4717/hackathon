<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 200 200"
    xml:space="preserve"
  >
    <g :fill="iconColor" :transform="iconTransform">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconBase",
  props: {
    iconWidth: {
      type: [Number, String],
      default: 18,
    },
    iconHeight: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
    iconTransform: String
  },
};
</script>
