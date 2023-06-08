<template>
  <div
    class="wheel-container"
    :class="{
      'moving-wheel-fast': speed > 50,
      'moving-wheel-slow': speed > 0 && speed <= 50,
    }"
  >
    <div class="wheel-spoke-vertical" />
    <div class="wheel-spoke-horizontal" />
  </div>
</template>

<script>
export default {
  name: "TruckWheel",
  props: {
    speed: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.wheel-container {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: black;
  position: relative;
  margin-top: 1px;
}

.moving-wheel-fast {
  animation: rotate-wheel 0.5s infinite linear;
}

.moving-wheel-slow {
  animation: rotate-wheel 2s infinite linear;
}

.wheel-spoke-vertical {
  height: 18px;
  width: 2px;
  background-color: white;
  position: absolute;
  top: 5%;
  left: 45%;
}

.wheel-spoke-horizontal {
  height: 2px;
  width: 18px;
  background-color: white;
  position: absolute;
  top: 45%;
  left: 5%;
}

@keyframes rotate-wheel {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
