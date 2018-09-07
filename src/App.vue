<template>
  <div id="app">
    <MapComponent />
  </div>
</template>

<script>
import MapComponent from "./components/MapComponent.vue";

export default {
  name: "app",
  components: {
    MapComponent
  }
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
