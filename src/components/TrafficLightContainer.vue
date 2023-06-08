<template>
  <div class="traffic-light-container-main">
    <div class="traffic-lights-container">
      <TrafficLight
        v-for="(trafficLight, index) in trafficLightData"
        :key="index"
        :is-light-on="trafficLight.isLightOn"
        :on-color="trafficLight.onColor"
        :off-color="trafficLight.offColor"
      />
    </div>
    <button class="traffic-light-btn" @click="onClickTrafficLightBtn()">
      Toggle Light
    </button>
  </div>
</template>

<script>
import TrafficLight from "./TrafficLight.vue";

export default {
  name: "TrafficLightContainer",
  components: {
    TrafficLight,
  },
  data() {
    return {
      trafficLightData: [
        {
          isLightOn: true,
          onColor: "red",
          offColor: "grey",
        },
        {
          isLightOn: false,
          onColor: "yellow",
          offColor: "grey",
        },
        {
          isLightOn: false,
          onColor: "green",
          offColor: "grey",
        },
      ],
    };
  },
  methods: {
    onClickTrafficLightBtn() {
      const selectedTrafficLightIndex = this.trafficLightData.findIndex(
        (light) => light.isLightOn
      );
      if (selectedTrafficLightIndex === 0) {
        this.trafficLightData[0].isLightOn = false;
        this.trafficLightData[2].isLightOn = true;
        this.$emit("color-change", this.trafficLightData[2].onColor);
      } else {
        this.trafficLightData[selectedTrafficLightIndex].isLightOn = false;
        this.trafficLightData[selectedTrafficLightIndex - 1].isLightOn = true;
        this.$emit(
          "color-change",
          this.trafficLightData[selectedTrafficLightIndex - 1].onColor
        );
      }
    },
  },
};
</script>

<style scoped>
.traffic-light-container-main {
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.traffic-lights-container {
  height: 120px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding: 5px 0;
  margin-bottom: 4px;
}

.traffic-light-btn {
  cursor: pointer;
}
</style>
