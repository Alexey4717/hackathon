<template>
  <div :class="$style.block">
    <a :class="$style.link" href="tel:+79842609685">+7 984 260 96 85</a>&nbsp;
    <a :class="$style.link" href="whatsapp://send?phone=+79842609685"> WA </a>/
    <a :class="$style.link" href="https://telegram.me/kvbovkalov">TG</a>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" module>
.block {
  font-size: 20px;
}

.link {
  &:hover {
    color: var(--primary);
  }
}
</style>
