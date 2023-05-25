<template>
  <div id="app">
    <div class="area-top">
      <input
        autofocus
        type="text"
        v-model="textInput"
        style="margin-right: 4px"
        @keyup.enter="addMessage()"
      />
      <button @click="addMessage()">Send</button>
    </div>
    <div class="area-bottom">
      <JSXComponent :messages="messages" />
      <RegularComponent :messages="messages" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import JSXComponent from "@/components/JSXComponent";
import RegularComponent from "@/components/RegularComponent";

export default {
  name: "App",
  components: { JSXComponent, RegularComponent },
  data() {
    return {
      textInput: "",
      messages: [
        {
          text: "Hello there!",
          fromUser: false,
          timestamp: "10:01 AM",
        },
        {
          text: "Hey! How can I help you?",
          fromUser: true,
          timestamp: "10:05 AM",
        },
      ],
    };
  },
  methods: {
    addMessage() {
      if (this.textInput !== "") {
        this.messages.push({
          text: this.textInput,
          fromUser: true,
          timestamp: moment().format("hh:mm a"),
        });
        this.textInput = "";
      }
    },
  },
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
  height: 100%;
  width: 100%;
}

.area-top {
  margin-top: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.area-bottom {
  height: 500px;
  width: 100%;
  display: flex;
}
</style>
