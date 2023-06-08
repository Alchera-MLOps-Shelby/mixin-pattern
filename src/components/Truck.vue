<template>
  <div class="truck-main">
    <div class="truck-top">
      <div class="truck-top-window" />
    </div>
    <div class="truck-bottom">
      <TruckWheel :speed="speed" />
      <div class="truck-bottom-between-wheels" />
      <TruckWheel :speed="speed" />
    </div>
  </div>
</template>

<script>
import TruckWheel from "./TruckWheel.vue";

export default {
  name: "TruckComponent",
  components: {
    TruckWheel,
  },
  data() {
    return {
      speed: 0,
    };
  },
  methods: {
    driveFast() {
      this.speed = 100;
    },
    slowDown() {
      this.speed = 30;
    },
    stop() {
      this.speed = 0;
    },
  },
};
</script>

<style>
.truck-main {
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
}

.truck-top {
  height: 40px;
  width: 100px;
  background-color: silver;
  border-radius: 4px 120px 4px 4px;
  position: relative;
}

.truck-top-window {
  height: 20px;
  width: 20px;
  background-color: lightblue;
  border-radius: 4px 120px 4px 4px;
  position: absolute;
  top: 10px;
  right: 4px;
}

.truck-bottom {
  display: flex;
  justify-content: center;
  align-items: space-between;
}

.truck-bottom-between-wheels {
  height: 10px;
  width: 50px;
  background-color: silver;
  margin: 0 2px;
}
</style>
