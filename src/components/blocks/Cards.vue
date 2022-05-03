<template>
  <h2 :class="$style.heading">
    Направления по созданию кейсов, учавствующие в хакатоне:
  </h2>
  <div :class="$style.wrapper">
    <card
      v-for="card in cards"
      :header="card.header"
      :description="card.description"
      :image="card.src"
      :link="card.link"
      :key="card.header"
    />
  </div>
</template>

<script>
import Card from "../ui/Card";
export default {
  name: "Cards",
  data() {
    return {
      cards: [
        {
          header: "Верстальщик сайтов",
          description: "Вёрстка сайтов по макетам (HTML + CSS)",
          src: "/src/assets/images/card-layout.webp",
          link: "LayoutDeveloper",
        },
        {
          header: "Frontend разработчик",
          description: "Разработка UI на одном из JavaScript фреймворке",
          src: "/src/assets/images/card-frontend.webp",
          link: "FrontendDeveloper",
        },
        {
          header: "Программист на Python",
          description: "Разработка программы сервера на Django",
          src: "/src/assets/images/card-python.webp",
          link: "PythonProgrammer",
        },
        {
          header: "Разработчик мобильных проложений",
          description: "Разработка мобильного UI на React-native",
          src: "/src/assets/images/card-mobile.webp",
          link: "MobileAppDeveloper",
        },
        {
          header: "Программист на IOS",
          description: "Разработка мобильного приложения на IOS",
          src: "/src/assets/images/card-ios.webp",
          link: "IosProgrammer",
        },
        {
          header: "Программист на Android",
          description: "Разработка мобильного приложения на Android",
          src: "/src/assets/images/card-android.webp",
          link: "AndroidProgrammer",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" module>
.heading {
  text-transform: uppercase;
  color: var(--primary-text);
  font-size: 30px;
  font-weight: bold;
  text-align: right;
  padding: 100px 0 30px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
