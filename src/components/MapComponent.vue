<template>
  <div />
</template>

<script>
import Map from "esri/Map";
import MapView from "esri/views/MapView";

export default {
  name: "MapComponent",
  mounted: function() {
    const map = new Map({
      basemap: "osm"
    });

    new MapView({
      container: this.$el, // Reference to the div
      map: map, // Reference to the map object created before the scene
      zoom: 4, // Sets zoom level based on level of detail (LOD)
      center: [15, 65] // Sets center point of view using longitude,latitude
    });
  }
};
</script>

<style scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
