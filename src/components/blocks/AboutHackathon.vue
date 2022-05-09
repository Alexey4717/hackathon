<template>
<div :class="$style.block">
  <div :class="$style.left_block">
    <h3 :class="$style.heading">Концепция</h3>
    <p :class="$style.question">Что такое хакатон цифровых профессий?</p>
    <p :class="$style.description">
      Это мероприятие, где команды, состоящие из молодых людей создают прототипы
      цифровых продуктов по техническому заданию от малого и среднего бизнеса
      (кейсы)
    </p>
  </div>
  <div :class="$style.rigth_block">
    <img :class="$style.image" src="@/assets/images/education.webp" alt="conseption-1" />
    <img :class="$style.image" src="@/assets/images/consept.webp" alt="conseption-2" />
  </div>
  </div>
</template>

<script>
export default {
  name: "AboutHackathon",
};
</script>

<style lang="scss" module>
.block {
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
}

.left_block {
  padding: 70px 0;
  max-width: 600px;
}

.heading {
  font-size: 76px;
  font-weight: bold;
}

.question {
  font-size: 46px;
  color: var(--secondary-text);
  padding: 40px 0 30px;
}

.description {
  font-size: 40px;
}

.rigth_block {
  position: relative;
}

.image {
  position: absolute;
  object-fit: cover;

  &:nth-child(1) {
    width: 275px;
    height: 400px;
    top: 210px;
    right: 235px;
    z-index: 1;
  }

  &:nth-child(2) {
    width: 550px;
    height: 450px;
    bottom: 0;
    right: 0;
    clip-path: polygon(75% 0, 100% 43%, 100% 100%, 45% 100%, 0 0);
  }
}
</style>
