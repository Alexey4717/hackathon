<template>
  <div :class="$style.block">
    <h3 :class="$style.heading">
      {{ kind === "case-givers" ? "Кейсодатели" : "" }}
      {{ kind === "partners" ? "Партнёры" : "" }}
      проекта <br />
      <span :class="$style.primary">Хакатон </span>
      <span :class="$style.secondary">цифровых профессий</span>
    </h3>
    <div :class="$style.participants" v-if="kind === 'case-givers'">
      <participant
        v-for="participant in caseGivers"
        :key="participant.title"
        :title="participant.title"
        role="Кейсодатель"
      />
    </div>
    <div :class="$style.participants" v-if="kind === 'partners'">
      <participant
        v-for="participant in partners"
        :key="participant.title"
        :title="participant.title"
        role="Партнёр"
      />
    </div>
  </div>
</template>

<script>
import Participant from "@/components/ui/Participant";

export default {
  name: "Participants",
  components: {
    Participant,
  },
  props: {
    kind: String,
  },
  data() {
    return {
      caseGivers: [
        {
          icon: "",
          title: "IT-компания Fogstream.ru",
        },
        {
          icon: "",
          title: "Интернет-агенство RASA.PRO",
        },
        {
          icon: "",
          title: "IT-компания optiacs.com",
        },
        {
          icon: "",
          title: "IT-компания DIGITAL LIFE",
        },
        {
          icon: "",
          title: "Инженерно-технический центр Синтез-Плюс eco-dv.ru",
        },
        {
          icon: "",
          title: 'ДВЖД-филиал ОАО "РЖД" dvzd.rzd.ru',
        },
      ],
      partners: [
        {
          icon: "",
          title:
            'Точка кипения Hi-Tech Дальневосточной железной дороги - ОАО "РЖД" в Хабаровске',
        },
        {
          icon: "",
          title: 'АНО "АПИРИ ХК"',
        },
        {
          icon: "",
          title: "Дальневосточный банк СберБанка",
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
.block {
  padding-top: 100px;
}

.heading {
  font-size: 46px;
  font-weight: bold;
  text-transform: uppercase;

  .primary {
    color: var(--primary-text);
  }

  .secondary {
    color: var(--secondary-text);
  }

  .primary,
  .secondary {
    text-transform: none;
  }
}

.participants {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>