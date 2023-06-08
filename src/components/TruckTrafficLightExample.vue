<template>
  <div>
    <TrafficLightContainer @color-change="onTrafficLightColorChange($event)" />
    <Truck ref="truck" />
  </div>
</template>

<script>
import TrafficLightContainer from "@/components/TrafficLightContainer";
import Truck from "@/components/Truck";

export default {
  name: "TruckTrafficLightExample",
  components: { TrafficLightContainer, Truck },
  watch: {
    trafficLightColor(color) {
      const truckRef = this.$refs.truck;
      if (color === "green") {
        truckRef.driveFast();
      } else if (color === "yellow") {
        truckRef.slowDown();
      } else {
        truckRef.stop();
      }
    },
  },
  data() {
    return {
      trafficLightColor: "red",
    };
  },
  methods: {
    onTrafficLightColorChange(color) {
      this.trafficLightColor = color;
    },
  },
};
</script>
