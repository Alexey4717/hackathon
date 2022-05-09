<template>
  <div :class="$style.block">
    <img
      :class="$style.side_image"
      src="@/assets/images/people.webp"
      alt="side-image-1"
    />
    <img
      :class="$style.side_image"
      src="@/assets/images/consept.webp"
      alt="side-image-2"
    />
    <h3 :class="$style.heading">Предложения по сотрудничеству</h3>
    <img
      :class="$style.avatar"
      src="@/assets/images/contact-avatar.webp"
      alt="avatar"
    />
    <span :class="$style.contact_name">
      Бовкалов<br />Константин
    </span>
    <contact />
  </div>
</template>

<script>
import Contact from "@/components/ui/Contact";

export default {
  name: "CooperationProposals",
  components: {
    Contact,
  },
};
</script>

<style lang="scss" module>
.block {
  position: relative;
  padding: 100px 0;
}

.side_image {
  position: absolute;
  right: 0;
  object-fit: cover;

  &:nth-child(1) {
    width: 600px;
    top: 0;
    clip-path: polygon(26% 0, 100% 0, 100% 64%, 0 100%, 0 9%);
    height: 550px;
    z-index: 1;
  }

  &:nth-child(2) {
    width: 430px;
    bottom: 0;
    height: 100%;
  }
}

.heading {
  font-size: 46px;
  font-weight: bold;
  max-width: 400px;
  padding-bottom: 250px;
}

.avatar {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.contact_name {
  display: block;
  font-size: 32px;
  font-weight: bold;
  padding: 10px 0;
}
</style>
