const itemOperations = {
  items: [],
  add(itemObject) {
    this.items.push(itemObject);
  },
  sortById() {
    return this.items.sort((a, b) => a.id - b.id);
  }
};
