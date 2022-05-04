<template>
  <div :class="$style.block">
    <img
      :class="$style.image"
      src="@/assets/images/participation.webp"
      alt="participation"
    />
    <div :class="$style.descriptions">
      <h3 :class="$style.heading">
        Что даёт участие в 
        <span :class="$style.secondary">хакатоне</span>&nbsp;
        <span :class="$style.primary">цифровых профессий?</span>
      </h3>
      <div :class="$style.participations">
        <participation-item
          v-for="participation in participations"
          :key="participation.heading"
          :heading="participation.heading"
          :description="participation.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ParticipationItem from "@/components/ui/ParticipationItem"
export default {
  name: "Participation",
  data () {
    return {
      participations: [
        {
          heading: "Выиграть стажировку/грант на реализацию проекта",
          description: "Команды могут всем составом стать стартап-командой и получить гранд на реализацию инновационного проекта (решения)"
        },
        {
          heading: "Получить опыт работы в будущей профессии",
          description: "Решение заданий от бизнеса даст вам практику, понимание карьеры digital и IT-специалиста в современном мире"
        },
        {
          heading: "Найти единомышленников для своих идей",
          description: "В ходе решения кейса участники хакатона смогут развить свои softskills и приобрести полезные знакомства для продолжения развития своих идей"
        },
      ]
    }
  },
  components: {
    ParticipationItem
  }
};
</script>

<style lang="scss" module>
.block {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
}

.image {
  object-fit: cover;
  width: 400px;

}

.descriptions {
  flex-grow: 1;
  padding: 50px 0 50px 50px;
}

.heading {
  font-size: 46px;
  font-weight: bold;

  & > .primary {
    color: var(--primary-text);
  }

  & > .secondary {
    color: var(--secondary-text);
  }
}

.participations {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
</style>
