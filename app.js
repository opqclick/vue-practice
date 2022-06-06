const app = Vue.createApp({
  data() {
    return {
      url: "https://hasnat.me",
      showBooks: true,
      books: [
        {
          title: "Harry potter",
          author: "J.K Rowling",
          img: "assets/1.jpeg",
          isFav: true,
        },
        {
          title: "Harry potter",
          author: "J.K Rowling",
          img: "assets/2.jpeg",
          isFav: false,
        },
        {
          title: "Harry potter",
          author: "J.K Rowling",
          img: "assets/3.jpeg",
          isFav: true,
        },
        {
          title: "Harry potter",
          author: "J.K Rowling",
          img: "assets/4.jpeg",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    ToggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
