const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
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
