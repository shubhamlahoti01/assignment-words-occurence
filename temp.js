// async function countWordsInTextFile(url) {
//   const response = await fetch(url);
//   const text = await response.text();

//   const words = text.split(/\s+/); // split on whitespace
//   const counts = {};

//   for (let word of words) {
//     counts[word] = (counts[word] || 0) + 1;
//   }

//   // Convert the counts object to an array of objects with word and count properties
//   const wordCounts = Object.entries(counts).map(([word, count]) => ({
//     word,
//     count,
//   }));

//   return wordCounts;
// }

// // Example usage
// countWordsInTextFile('https://www.terriblytinytales.com/test.txt')
//   .then((wordCounts) => console.log(wordCounts))
//   .catch((error) => console.error(error));

// function wordcount(phrase) {
//   var result = {}; // will contain each word in the phrase and the associated count
//   var words = phrase.split(' '); // assuming each word in the phrase is separated by a space

//   words.forEach(function (word) {
//     // only continue if this word has not been seen before
//     if (!result.hasOwnProperty(word)) {
//       result[word] = phrase.match(/word/g).length;
//     }
//   });

//   console.log(result);
// }
// wordcount(
//   `vlkfanlvnafld 343 cvfajjnlv cvfajjnlv ,cvfajjnlv  cvfajjnlv .cvfajjnlv ''.cvfajjnlv'.`
// );
// const data = `1. Who are you?

// We're Terribly Tiny Tales – one of the world's most celebrated social storytelling platforms.
// We bring together a diverse pool of fantastic writers to create really short stories for a community of over 20 million readers, every day.

// 2. Where can I find ttt on social media?

// You can find us on
// Instagram (@ttt_official),
// Facebook (fb.com/terriblytinytales),
// Twitter (@terriblytiny),
// and YouTube (youtube.com/terriblytinytalkies)

// 3. Where can I read all your stories? / I want to read all tales; where can I find them?

// All published tales can be found across our social media platforms.

// 4. How do I get in touch with you?

// For events and workshops, write to us at events@terriblytinytales.com
// For potential brand collaborations, shoot us a mail from your work email address on collab@terriblytinytales.com/a>
// If you have any other questions or to simply say hi, ping us at hello@terriblytinytales.com

// 5. Can I submit a tale too? If yes, then where?

// If you have a tale to tell, we're all eyes.
// You can write them on the TTT app.

// 6. I have submitted something. When will it be published?

// It usually takes a while – with a huge number of submissions coming our way daily, curation is tedious – but a task we gladly work upon.
// If it's scheduled to be published, you'll receive a mail from us saying so.

// 7. Will I get any feedback on my writing?

// Individual feedback is logistically difficult to give. However, we're currently working on systems to get this into place.

// 8. If my tale gets rejected, will I be informed?

// There's no easy way to tell you this, so here it goes – Nope.

// 9. How do I become a Select writer with ttt?

// You can become a part of our handpicked group of Select writers by taking this copy test at http://bit.ly/terribly-tiny-test

// 10. On your page, I've come across pieces that are more than 140 characters. Can I submit those too?

// Currently we're accepting longer pieces only from our Select writers. To be a part of Select, get discovered today at http://bit.ly/terribly-tiny-test

// 11. When I write a tale, do I need to mention the word of my choice?

// Yes. It makes finding your tale easier, and also lets the readers know where you began.

// 12. Who decides what goes up?

// We have an internal curation team, working on which tale goes up, and how.
// They're helped by our dedicated bunch of community curators who tirelessly curate Community submissions post which the internal team picks the best.

// 13. How can I work with ttt?

// Mail us your best work, resume, and cover-letter to hello@terriblytinytales.com
// You can become a part of our handpicked group of Select writers by taking the copy test at http://bit.ly/terribly-tiny-test

// 14. Does ttt take interns? And where can I apply?

// Yes, we do. You can apply by sending us your best work, resume, and cover-letter to hello@terriblytinytales.com

// 15. Do you have an office?

// We do.

// 16. If I (or the brand I represent) want to collaborate, how do I go about it?

// For potential brand collaborations, shoot us a mail from your work email address on collab@terriblytinytales.com

// 17. How do we know about an upcoming workshop in our city?

// For upcoming events and updates, keep an eye out on our social media.

// 18. Where can I request a workshop in my city/college?

// Write to us at events@terriblytinytales.com and we'll help you organize one in your city/college.

// 19. I attended a workshop; I haven't received my certificate yet. When will I get it?

// We mail the digital certificate to the email you provide. In case you haven't received it in your inbox, let us know at events@terriblytinytales.com , and we'll get back to you.

// 20. Does ttt sell official merchandise? If yes, where do I find it?

// We currently don't sell merchandise.

// 21. I want a tale written for me (or gift it to someone), how do I go about it?

// We currently don't sell merchandise.

// 22. Is ttt merchandise available on any other e-commerce websites?

// We currently don't sell merchandise.

// 23. What is terribly tiny talkies?

// Terribly Tiny Talkies is a storytelling collective under Terribly Tiny Talkies, which brings together distinctive and talented filmmakers from across the country to craft thematic short films.
// Each talkie is under five minutes, and filmed around a central keyword and idea.
// TTT endures to save the fading art of the narrative, one frame at a time.

// 24. Where do I watch all the terribly tiny talkies?

// We're here:https://www.youtube.com/terriblytinytalkies

// 25. How do I work for terribly tiny talkies?

// If you have a strong showreel to show or are simply interested in exploring opportunities in film, you can apply/know more at .

// 26. Can brands collaborate for talkies?

// Yes, we've already collaborated with brands in the past to create striking films that move. Shoot us a mail at collab@terriblytinytales.com and we'll take it forward from there.

// Us	FAQ	ttt
// Privacy	Careers
// Terms of Service	Press`

function countWordsInPhrase(phrase) {
  const words = phrase.match(/\w+/g); // match on word characters
  const counts = {};

  for (let word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }

  return counts;
}

// Example usage
const phrase = `the quick brown fox jumps over the lazy dog
/cnalknfda 'cnalknfda.cnalknfda'' nv lcfsanl
`;
const wordCounts = countWordsInPhrase(phrase);
console.log(wordCounts);
// Output: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }
