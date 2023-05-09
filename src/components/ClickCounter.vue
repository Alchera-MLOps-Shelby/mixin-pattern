<template>
  <button @click="increment">Clicks: {{ count }}</button>
</template>

<script>
import counter from "@/mixins/counter.js";

export default {
  mixins: [counter],
  data() {
    // return { count: 0 };
  },
  methods: {
    // increment() {
    //   this.count++;
    // },
  },
};
</script>
