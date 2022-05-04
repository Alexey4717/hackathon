<template>
  <div :class="$style.block">
    <img :class="$style.image" src="@/assets/images/case.png" alt="case" />
    <div :class="$style.descriptions">
      <h3 :class="$style.heading"
        >Примеры заданий (кейсов) от коммерческих компаний могут быть
        следующие:</h3
      >
      <p :class="$style.description">
        <b>Разработка мобильного приложения</b> по доставке воды или продуктов с
        оптимизацией маршрута в городской и пригородной территории (с
        подключением доступных API геосервисов, например, Яндекс.Карты)
      </p>
      <h3 :class="$style.heading"
        >Какие цифровые компетенции (профессии) можно задействовать при решении
        такого кейса?</h3
      >
      <ul :class="$style.description">
        <li>Программирование (React Native или IOS / Android)</li>
        <li>Цифровой дизайн (Figma, UX / UI)</li>
        <li>
          Product manager (Техническое задание, коммуникация с Заказчиком)
        </li>
        <li>Тестировщик мобильного приложения (QA-инженер)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CasesExample",
};
</script>

<style lang="scss" module>
.block {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
}

.image {
  width: 285px;
  height: 600px;
  object-fit: cover;
}

.descriptions {
  padding-left: 50px;
  text-align: justify;
}

.heading {
  color: var(--primary-text);
  font-size: 32px;
  font-weight: bold;
  padding: 65px 0 30px;
}

.description {
  font-size: 22px;
  list-style-position: inside;
}
</style>
