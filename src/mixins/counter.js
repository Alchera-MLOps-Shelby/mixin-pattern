const counter = {
  data() {
    return { count: 0 };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};

export default counter;
