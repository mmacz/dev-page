function getRandomIdx(maxIdx) {
    return Math.floor(Math.random() * maxIdx);
}

function getQuote() {
    var quotes = new Array();
    quotes.push({"quote": "Beauty of style and harmony and grace and good rhythm depend on simplicity.","author": "Plato"});
    quotes.push({"quote": "Walking on water and developing software from a specification are easy if both are frozen.", "author": "Edward V Berard"});
    quotes.push({"quote": "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", "author": "Eric S. Raymond"});
    quotes.push({"quote": "Talk is cheap. Show me the code.", "author": "Linus Torvalds"});
    quotes.push({"quote": "In God we trust. All others must bring data.", "author": "W. Edwards Demming"});
    quotes.push({"quote": "In theory, theory and practice are the same. In practice, they’re not.", "author": "Yoggi Berra"});
    quotes.push({"quote": "You can’t have great software without a great team, and most software teams behave like dysfunctional families.", "author": "Jim McCarthy"});
    quotes.push({"quote": "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.", "author": "Randall E. Stross"});
    quotes.push({"quote": "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.", "author": "Donald Knuth"});
    quotes.push({"quote": "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.", "author": "Larry Wall"});
    quotes.push({"quote": "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "author": "Linus Torvalds"});
    quotes.push({"quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "author": "Martin Golding"});
    quotes.push({"quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "author": "Martin Fowler"});
    quotes.push({"quote": "Programming is like sex. One mistake and you have to support it for the rest of your life.", "author": "Michael Sinz"});
    quotes.push({"quote": "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.", "author": "Gerald Weinberg"});
    quotes.push({"quote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "author": "Brian W. Kernighan"});
    quotes.push({"quote": "You can use an eraser on the drafting table or a sledgehammer on the construction site", "author": "Frank Lloyd Wright"});
    quotes.push({"quote": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.", "author": "Tom Cargill "});
    quotes.push({"quote": "There are only two kinds of languages: the ones people complain about and the ones nobody uses.", "author": "Bjarne Stroustrup"});
    quotes.push({"quote": "It's all talk until the code runs.", "author": "Ward Cunningham"});
    quotes.push({"quote": "Given enough eyeballs, all bugs are shallow.", "author": "Linus Torvalds"});
    quotes.push({"quote": "A clever person solves a problem. A wise person avoids it.", "author": "Albert Einstein"});
    quotes.push({"quote": "Being a good software engineer is 3% talent, 97% not being distracted by the internet.", "author": "Unknown"});
    quotes.push({"quote": "Any sufficiently advanced technology is indistinguishable from magic.", "author": "Arthur C. Clarke"});
    quotes.push({"quote": "A ship in port is safe, but that's not what ships are built for.", "author": "Grace Hopper"});
    quotes.push({"quote": "The imposter syndrome is real. Luckily, it goes away.", "author": "Kimber Lockhart"});
    quotes.push({"quote": "Know how to learn. Then, want to learn.", "author": "Katherine Johnson"});
    quotes.push({"quote": "Never trust a computer you can’t throw out a window.", "author": "Steve Wozniak"});
    quotes.push({"quote": "When in doubt, use brute force.", "author": "Ken Thompson"});
    quotes.push({"quote": "Once a new technology starts rolling, if you’re not part of the steamroller, you’re part of the road.", "author": "Stewart Brand"});
    quotes.push({"quote": "The most disastrous thing that you can ever learn is your first programming language.", "author": "Alan Kay"});
    quotes.push({"quote": "Optimism is an occupational hazard of programming. Feedback is the treatment.", "author": "Kent Beck"});
    quotes.push({"quote": "The function of good software is to make the complex appear to be simple.", "author": "Grady Booch"});
    quotes.push({"quote": "I'm not a great programmer. I'm just a good programmer with great habits.", "author": "Kent Beck"});
    quotes.push({"quote": "Beauty of style and harmony and grace and good rhythm depend on simplicity.", "author": "Plato"});
    var idx = getRandomIdx(quotes.length);
    document.getElementById("quote").innerHTML  = quotes[idx]["quote"];
    document.getElementById("author").innerHTML = quotes[idx]["author"];
}


