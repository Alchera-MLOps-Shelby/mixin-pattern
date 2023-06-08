<template>
  <div id="app">
    <TruckTrafficLightExample />
    <TruckTrafficLightExample />
    <TruckTrafficLightExample />
  </div>
</template>

<script>
import TruckTrafficLightExample from "@/components/TruckTrafficLightExample";

export default {
  name: "App",
  components: { TruckTrafficLightExample },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
