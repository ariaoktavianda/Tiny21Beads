document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Gelang Kepang', img: '1.jpg', price: 8_000 },
      { id: 2, name: 'Gelang Beads', img: '2.jpg', price: 10_000 },
      { id: 3, name: 'Gelang dengan Beads', img: '3.jpg', price: 10_000 },
      { id: 4, name: 'Gelang Kepang dengan Bandul', img: '4.jpg', price: 15_000 },
      { id: 5, name: 'Gelang dengan Bandul Love', img: '5.jpg', price: 15_000 },
      { id: 6, name: 'Gelang dengan Bandul Love', img: '6.jpg', price: 15_000 },
      { id: 7, name: 'Gelang dengan Bandul Love', img: '7.jpg', price: 15_000 },
      { id: 8, name: 'Gelang dengan Bandul Love', img: '8.jpg', price: 15_000 },
      { id: 9, name: 'Gelang dengan Bandul Love', img: '9.jpg', price: 15_000 },
      { id: 10, name: 'Gelang dengan Bandul Love', img: '10.jpg', price: 15_000 },
      { id: 11, name: 'Gelang dengan Bandul Love', img: '11.jpg', price: 15_000 },
      { id: 12, name: 'Gelang dengan Bandul Love', img: '12.jpg', price: 15_000 },
      { id: 13, name: 'Gelang dengan Bandul Love', img: '13.jpg', price: 15_000 },
      { id: 14, name: 'Gelang dengan Bandul Love', img: '14.jpg', price: 15_000 },
      { id: 15, name: 'Gelang dengan Bandul Love', img: '15.jpg', price: 15_000 },
      { id: 16, name: 'Gelang dengan Bandul Love', img: '16.jpg', price: 15_000 },
      { id: 17, name: 'Gelang dengan Bandul Love', img: '17.jpg', price: 15_000 },
      { id: 18, name: 'Gelang dengan Bandul Love', img: '18.jpg', price: 15_000 },
      { id: 19, name: 'Gelang dengan Bandul Love', img: '19.jpg', price: 15_000 },
      { id: 20, name: 'Gelang dengan Bandul Love', img: '20.jpg', price: 15_000 },
      { id: 21, name: 'Gelang dengan Bandul Love', img: '21.jpg', price: 15_000 },
      { id: 22, name: 'Gelang dengan Bandul Love', img: '22.jpg', price: 15_000 },
      { id: 23, name: 'Gelang dengan Bandul Love', img: '23.jpg', price: 15_000 },
      { id: 24, name: 'Gelang dengan Bandul Love', img: '24.jpg', price: 15_000 },
      { id: 25, name: 'Gelang dengan Bandul Love', img: '25.jpg', price: 15_000 },
    ],
  }));

  Alpine.store('cart', {
    items: [],
    quantity: 0,
    total: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items = [...this.items, { ...newItem, quantity: 1, total: newItem.price }];
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: item.price * (item.quantity + 1),
              }
            : item
        );
        this.quantity++;
        this.total += cartItem.price;
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (!cartItem) return;

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                total: item.price * (item.quantity - 1),
              }
            : item
        );
        this.quantity--;
        this.total -= cartItem.price;
      } else {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});
