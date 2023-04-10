export default function Entry(text) {
  this.text = text;
}

Entry.prototype.wordCount = function() {
  const textArray = this.text.split(" ");
  return textArray.length;
};

Entry.prototype.vowelCount = function() {
  const characterArray = this.text.split("");
  const vowelArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  characterArray.forEach(element => {
    if (vowelArray.includes(element.toLowerCase())) {
      count = count + 1;
    }
  });
  return count;
};

Entry.prototype.consonantCount = function() {
  const characterArray = this.text.split("");
  const consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let count = 0;
  characterArray.forEach(element => {
    if (consonantArray.includes(element.toLowerCase())) {
      count = count + 1;
    }
  });
  return count;
};

Entry.prototype.getTeaser = function() {
  const textArray = this.text.split(" ");
  const teaserArray = textArray.slice(0, 8);
  return teaserArray.join(" ");
};