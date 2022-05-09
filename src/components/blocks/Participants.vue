<template>
  <div :class="$style.block">
    <h3 :class="$style.heading">
      {{ kind === "case-givers" ? "Кейсодатели" : "" }}
      {{ kind === "partners" ? "Партнёры" : "" }}
      проекта <br />
      <span :class="$style.primary">Хакатон </span>
      <span :class="$style.secondary">цифровых профессий</span>
    </h3>
    <div :class="$style.participants" v-if="kind === 'case-givers'" name="Кейсодатель">
      <participant
        v-for="participant in caseGivers"
        :key="participant.title"
        :title="participant.title"
        :icon="participant.icon"
        role="Кейсодатель"
      />
    </div>
    <div :class="$style.participants" v-if="kind === 'partners'">
      <participant
        v-for="participant in partners"
        :key="participant.title"
        :title="participant.title"
        :icon="participant.icon"
        role="Партнёр"
      />
    </div>
  </div>
</template>

<script>
import Participant from "@/components/ui/Participant";
import fogstream from '@/assets/images/fogstream.svg';
import rasa from '@/assets/images/rasa.svg';
import optiacs from '@/assets/images/optiacs.png';
import digitalLife from '@/assets/images/digital-life.svg';
import sintezPlus from '@/assets/images/sintez_plus.webp';
import rzd from '@/assets/images/rzd.svg';
import hiTech from '@/assets/images/hi-tech.png';
import apiri from '@/assets/images/apiri.png';
import sber from '@/assets/images/sber.png';

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
          icon: fogstream,
          title: "IT-компания Fogstream.ru",
        },
        {
          icon: rasa,
          title: "Интернет-агенство RASA.PRO",
        },
        {
          icon: optiacs,
          title: "IT-компания optiacs.com",
        },
        {
          icon: digitalLife,
          title: "IT-компания DIGITAL LIFE",
        },
        {
          icon: sintezPlus,
          title: "Инженерно-технический центр Синтез-Плюс eco-dv.ru",
        },
        {
          icon: rzd,
          title: 'ДВЖД-филиал ОАО "РЖД" dvzd.rzd.ru',
        },
      ],
      partners: [
        {
          icon: hiTech,
          title:
            'Точка кипения Hi-Tech Дальневосточной железной дороги - ОАО "РЖД" в Хабаровске',
        },
        {
          icon: apiri,
          title: 'АНО "АПИРИ ХК"',
        },
        {
          icon: sber,
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

  &[name="Кейсодатель"] {
    align-items: center;
  }
}
</style>