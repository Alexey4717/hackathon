<template>
  <div>
    <hackathon-presentation/>
    <cards/>
  </div>
</template>

<script>
import HackathonPresentation from "@/components/blocks/HackathonPresentation"
import Cards from "@/components/blocks/Cards"

document.title = 'Хакатон цифровых профессий'

export default {
  name: "Home",
  components: {
    Cards,
    HackathonPresentation
  }
};
</script>
