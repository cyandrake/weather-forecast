<template>
  <Nav-component/>
  <router-view/>

</template>
<script>
import NavComponent from "@/components/NavComponent";

export default {
  components: {NavComponent}
}

</script>