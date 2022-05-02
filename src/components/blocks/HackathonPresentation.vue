<template>
  <div :class="$style.block">
    <img
      :class="$style.image"
      src="@/assets/images/education.png"
      alt="education"
    />
    <div :class="$style.descriptions">
      <span :class="$style.heading">
        Проект по поддержке <br />талантливой молодёжи Хабаровского края
      </span>
      <span :class="$style.description">Хакатон</span>
      <span :class="$style.description">цифровых профессий</span>
      <span :class="$style.description">far code</span>
      <span :class="$style.contact__header">Контакт</span>
      <span :class="$style.contact__name">Бовкалов Константин</span>
      <contact />
    </div>

    <div :class="$style.blue_block">
      <span :class="$style.footer">Хабаровск</span>
      <span :class="$style.footer">сентябрь 2022</span>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/ui/Contact";
export default {
  name: "HackathonPresentation",
  components: {
    Contact,
  },
};
</script>

<style lang="scss" module>
.block {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 70px 0;
}
.image {
  position: absolute;
  top: 0;
  right: -0.5px;
  width: 500px;
  clip-path: polygon(0 0, 100% 0, 100% 53%, 0% 100%);
}

.descriptions {
  padding-top: 70px;
}

.heading {
  display: block;
  font-size: 20px;
  max-width: 500px;
  padding-bottom: 40px;
}

.description {
  display: block;
  font-size: 76px;
  font-weight: bold;
  max-width: 500px;

  &:nth-child(3) {
    color: var(--secondary-text);
    line-height: 1;
    padding: 10px 0 20px;
  }

  &:nth-child(4) {
    font-size: 56px;
    color: var(--primary-text);
    text-transform: uppercase;
  }
}

.contact__header {
  display: block;
  font-size: 32px;
  font-weight: bold;
  padding-top: 100px;
}

.contact__name {
  display: block;
  font-size: 26px;
  padding: 10px 0;
}

.blue_block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: var(--primary);
  width: 400px;
  padding: 40px;
}

.footer {
  color: white;

  &:nth-child(1) {
    font-size: 32px;
    font-weight: bold;
  }

  &:nth-child(2) {
    font-size: 24px;
    padding-top: 15px;
  }
}
</style>
