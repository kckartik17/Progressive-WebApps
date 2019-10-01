const calculate = {
  text: "",
  setText(txt) {
    this.text = txt;
  },
  words() {
    var words = [];
    for (var i = 0; i < this.text.length; i++) {
      if (!/[^a-zA-Z]/.test(this.text[i])) {
      } else {
        words.push(this.text[i]);
      }
    }

    return words.length + 1;
  },
  letters() {
    var letters = [];

    for (var i = 0; i < this.text.length; i++) {
      if (!/[^a-zA-Z]/.test(this.text[i])) {
        letters.push(this.text[i]);
      }
    }

    return letters.length + 1;
  },
  para() {
    return this.text.split(/\n/).length;
  }
};
