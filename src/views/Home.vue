<template>
  <div>
    <hackathon-presentation />
    <about-hackathon />
    <cards />
    <cases-example />
    <participation />
    <participants kind="case-givers" />
    <participants kind="partners" />
    <cooperation-proposals />
  </div>
</template>

<script>
import HackathonPresentation from "@/components/blocks/HackathonPresentation";
import AboutHackathon from "@/components/blocks/AboutHackathon";
import Cards from "@/components/blocks/Cards";
import CasesExample from "@/components/blocks/CasesExample"
import Participation from "@/components/blocks/Participation"
import Participants from "@/components/blocks/Participants"
import CooperationProposals from "@/components/blocks/CooperationProposals"

document.title = "Хакатон цифровых профессий";

export default {
  name: "Home",
  components: {
    HackathonPresentation,
    AboutHackathon,
    Cards,
    CasesExample,
    Participation,
    Participants,
    CooperationProposals
  },
};
</script>
