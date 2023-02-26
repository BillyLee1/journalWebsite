##known bug
#### No period if less than 8 words
Describe: Entry()

Describe: Entry.prototype.wordCount()
Test 1: "It should return word count for 'Hello World'"
Code: const entry = new Entry("Title", "Hello World"); const result = entry.wordCount();
Expected Output:2

Describe: Entry.prototype.vowelCount()
Test 1: "It should return vowel count for 'Hello World'"
Code: const entry = new Entry("Title", "Hello World"); const result = entry.vowelCount();
Expected Output:3

Describe: Entry.prototype.consonantCount()
Test 1: "It should return consonant count for 'Hello World'"
Code: const entry = new Entry("Title", "Hello World"); const result = entry.consonantCount();
Expected Output:7

Describe: Entry.prototype.getTeaser()
Test 1: "It should return the first sentence with a limit of the first 8 words for 'There are five words'"
const entry = new Entry("Title", "There are five words"); const result = entry.getTeaser ();
