<template>
  <div>
    <hackathon-presentation />
    <about-hackathon />
    <cards />
  </div>
</template>

<script>
import HackathonPresentation from "@/components/blocks/HackathonPresentation";
import AboutHackathon from "@/components/blocks/AboutHackathon";
import Cards from "@/components/blocks/Cards";

document.title = "Хакатон цифровых профессий";

export default {
  name: "Home",
  components: {
    HackathonPresentation,
    AboutHackathon,
    Cards,
  },
};
</script>
