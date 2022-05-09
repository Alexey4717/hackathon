<template>
  <h3 :class="$style.heading" id="cases">
    Направления по созданию кейсов, учавствующие в хакатоне:
  </h3>
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
import cardLayout from "@/assets/images/card-layout.webp";
import cardFrontend from "@/assets/images/card-frontend.webp";
import cardPython from "@/assets/images/card-python.webp";
import cardMobile from "@/assets/images/card-mobile.webp";
import cardIos from "@/assets/images/card-ios.webp";
import cardAndroid from "@/assets/images/card-android.webp";

export default {
  name: "Cards",
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          header: "Верстальщик сайтов",
          description: "Вёрстка сайтов по макетам (HTML + CSS)",
          src: cardLayout,
          link: "LayoutDeveloper",
        },
        {
          header: "Frontend разработчик",
          description: "Разработка UI на одном из JavaScript фреймворке",
          src: cardFrontend,
          link: "FrontendDeveloper",
        },
        {
          header: "Программист на Python",
          description: "Разработка программы сервера на Django",
          src: cardPython,
          link: "PythonProgrammer",
        },
        {
          header: "Разработчик мобильных проложений",
          description: "Разработка мобильного UI на React-native",
          src: cardMobile,
          link: "MobileAppDeveloper",
        },
        {
          header: "Программист на IOS",
          description: "Разработка мобильного приложения на IOS",
          src: cardIos,
          link: "IosProgrammer",
        },
        {
          header: "Программист на Android",
          description: "Разработка мобильного приложения на Android",
          src: cardAndroid,
          link: "AndroidProgrammer",
        },
      ],
    };
  }
};
</script>

<style lang="scss" module>
.heading {
  text-transform: uppercase;
  color: var(--primary-text);
  font-size: 30px;
  font-weight: bold;
  text-align: right;
  padding: 50px 0 30px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
