const app = Vue.createApp({
	data() {
		return {
			show: false,
			url_test: "test",
			url: "https://google.com",
			title: "Test title",
			number: 0,
			x: 0,
			y: 0,
			books: [
				{ title: "Test 1", author: "Test author 1", src: "assets/1.jpg", isFavorite: false },
				{ title: "Test 2", author: "Test author 2", src: "assets/2.jpg", isFavorite: true },
				{ title: "Test 3", author: "Test author 3", src: "assets/3.jpg", isFavorite: true },
			],
		};
	},
	computed: {
		filteredBooks() {
			return this.books.filter(book => book.isFavorite);
		},
	},
	methods: {
		reset() {
			this.number = 0;
		},
		toggleShow() {
			this.show = !this.show;
		},
		handleEvent(e, number) {
			if (e.type === "mousemove") {
				this.x = e.offsetX;
				this.y = e.offsetY;
			}
		},
		swapFavorites(book) {
			book.isFavorite = !book.isFavorite;
		},
	},
});

app.mount("#app");
