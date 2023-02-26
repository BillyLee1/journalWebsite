function Entry(title, body){
    this.title = title;
    this.body = body;
}

Entry.prototype.wordCount = function() {
    let words = this.body.split(" ");
    return words.length;
};

Entry.prototype.vowelCount = function() {
    var vowels = [];
    vowels = this.body.match(/[AEIOU]/gi);
    return vowels.length;
  };

Entry.prototype.consonantCount = function() {
  var vowels = [];
  vowels = this.body.match(/[b-df-hj-np-tv-z]/gi);
  return vowels.length;
};

Entry.prototype.getTeaser = function() {
  let firstSentence = this.body.split(/([\.\!\?])/).shift();
  let firstSentenceWords = firstSentence.split(" ");
  let counter = 0;
  let teaser = [];

  firstSentenceWords.forEach(function(word) {
    if (counter < 8) {
    teaser.push((word));
    counter++;
    } else {
      return;
    }
  });
  
  firstSentenceWords = teaser.join(" ");
  return firstSentenceWords;
};

let entry = new Entry("Title", "Hi my name is Billy Lee Hello Heloo yooo.");
