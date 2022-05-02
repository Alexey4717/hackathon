<template>
  <h2>Профессии</h2>
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
          src: "/src/assets/images/card-layout.jpg",
          link: "LayoutDeveloper"
        },
        {
          header: "Frontend разработчик",
          description: "Разработка UI на одном из JavaScript фреймворке",
          src: "/src/assets/images/card-frontend.jpg",
          link: "FrontendDeveloper"
        },
        {
          header: "Программист на Python",
          description: "Разработка программы сервера на Django",
          src: "/src/assets/images/card-python.jpg",
          link: "PythonProgrammer"
        },
        {
          header: "Разработчик мобильных проложений",
          description: "Разработка мобильного UI на React-native",
          src: "/src/assets/images/card-mobile.jpg",
          link: "MobileAppDeveloper"
        },
        {
          header: "Программист на IOS",
          description: "Разработка мобильного приложения на IOS",
          src: "/src/assets/images/card-ios.jpg",
          link: "IosProgrammer"
        },
        {
          header: "Программист на Android",
          description: "Разработка мобильного приложения на Android",
          src: "/src/assets/images/card-android.jpg",
          link: "AndroidProgrammer"
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
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
