// this is a node commpand module that lets users type in the terminal found in https://nodejs.org/api/readline.html#class-readlineinterface
var readline = require('readline');

// Class : intergface Constructor to use redline.
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Decided to go with a array object with properties. three different jokes in one array.
const Data = [
    {'type': 'general', 'joke': 'Why did the butcher work extra hours at the shop?', 'punchline': 'To make ends meat.' },
    {'type': 'general', 'joke': 'How do you find Will Smith in the snow?', 'punchline': 'Look for fresh prints.' },
    {'type': 'general', 'joke': 'Why did the mushroom get invited to the party?', 'punchline': 'Because he was a fungi.' },
    {'type': 'general', 'joke': 'How do you steal a coat?', 'punchline': 'You jacket.' },
    {'type': 'general', 'joke': 'What\'s blue adn not very heavy?', 'punchline': 'Light blue.' },
    {'type': 'general', 'joke': 'Why does Waldo only wear stripes?', 'punchline': 'Because he doesn\'t want to be spotted.' },
    {'type': 'programming', 'joke': 'How many programmers does it take to change a lightbulb?', 'punchline': 'None that is a hardware problem.' },
    {'type': 'programming', 'joke': 'What\'s the object-oriented waay to become wealthy?', 'punchline': 'Inheritance' },
    {'type': 'programming', 'joke': 'Hwy did the programmer quit his job?', 'punchline': 'Because he didn\'t get arrays.' },
    {'type': 'programming', 'joke': 'To understans what recursion is...', 'punchline': 'You must first understand what recursion is.' },
    {'type': 'programming', 'joke': 'Where to programmers like to hangout?', 'punchline': 'The Foo Bar.' },
    {'type': 'programming', 'joke': 'Which song would an exception sing?', 'punchline': 'Can\'t catch me - Avicii' },
    {'type': 'dad jokes', 'joke': 'How do you get a squirrel to like you?', 'punchline': 'Act Nuts.' },
    {'type': 'dad jokes', 'joke': 'What\'s an astronaut\'s favorite part of a computer?', 'punchline': 'The space bar.' },
    {'type': 'dad jokes', 'joke': 'Is the pool safe for diving?', 'punchline': 'it deep ends.' },
    {'type': 'dad jokes', 'joke': 'What kind of shoes ninjas wear?', 'punchline': 'Sneakers.' },
    {'type': 'dad jokes', 'joke': 'What did the fish say when it hit the wall?', 'punchline': 'dam.' },
    {'type': 'dad jokes', 'joke': 'I\'ve got a great joke about construction...', 'punchline': 'but i\'m still working on it.' },
]

// get Jokes returns  a new array of filtered jokes with the type of joke the user wants to read.
function getJokes(type){
    // filter method to return array of objects with type of joke user wants 
    const arrJoke = Data.filter((j) => j.type === type)
    return arrJoke
}

// random joke selected based on array of object returned from get jokes function
function ranJoke(arr){
    let ran = Math.floor(Math.random() * arr.length)
    return arr[ran]
}

// display joke return the object properties from the randome Joke array object 
function displayJoke(obj){
    // consoles the objects joke property to the console.
    console.log(obj.joke);
    // uses setTimeout to wait for the object.punchline property to show on the console takes 3 secs or 3000 ms
    setTimeout(() => {
        console.log(obj.punchline)
    }, 3000)
}


// Every instance is associated with a single input Readable stream and a single output Writable stream. 
// The output stream is used to print prompts for user input that arrives on, and is read from, the input stream.
// Link to the docs top of page.

rl.question("Type: dad jokes, programming or general for a joke(ex: programming).", function(answer) {
    // single input stream.toLowerCase in case a user types in caps
    answer = answer.toLowerCase()

    const anwers = ['dad jokes', 'programming', 'general']

    // conditionn returns whether the use inputs any value in answers array, if not console an error
    if(anwers.includes(answer) === false){
        console.log(`${answer} not a valid joke. try again.`)
    }else{
        const filteredJoke = getJokes(answer)
        const joke = ranJoke(filteredJoke)
        displayJoke(joke);
    }
    // this closes readline program, also cal with CTRL-C in terminal
    rl.close();
});

