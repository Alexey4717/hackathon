<template>
  <div>
    <cards/>
  </div>
</template>

<script>
import Cards from "@/components/blocks/Cards"

document.title = 'Хакатон цифровых профессий'

export default {
  name: "Home",
  components: {
    Cards
  }
};
</script>
