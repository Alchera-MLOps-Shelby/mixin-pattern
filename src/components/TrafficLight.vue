<template>
  <div
    class="main-traffic-light"
    :style="`background-color: ${isLightOn ? onColor : offColor}`"
  />
</template>

<script>
export default {
  name: "TrafficLight",
  props: {
    isLightOn: {
      type: Boolean,
      required: true,
    },
    onColor: {
      type: String,
      default: "red",
    },
    offColor: {
      type: String,
      default: "grey",
    },
  },
};
</script>

<style>
.main-traffic-light {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
</style>
