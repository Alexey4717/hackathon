<template>
  <div class="nav nav-pills ms-auto" id="nav">
    <NavLink v-for="navlink in navlinks" :link="navlink" :key="navlink" />
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "NavbarComponent",
  data() {
    return {
      navlinks: [
        "LayoutDeveloper",
        "FrontendDeveloper",
        "PythonProgrammer",
        "MobileAppDeveloper",
        "IosProgrammer",
        "AndroidProgrammer",
      ]
    }
  },
  components: {
    NavLink,
  },
};
</script>
