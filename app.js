const app = Vue.createApp({
  data() {
    return {
      title: "title",
      author: "Opu",
      age: "33",
    };
  },
  methods: {
    changeTitle(title) {
      //this.title = "new Title";
      this.title = title;
    },
  },
});

app.mount("#app");
