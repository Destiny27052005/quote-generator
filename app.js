const quotes = [
    {
        quote: "You're Believe you can and halfway there.",
        name: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        name: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        name: "Winston Churchill"
    },
    {
        quote: "The biggest adventure you can take is to live the life of your dreams.",
        name: "Oprah Winfrey"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        name: "Nelson Mandela"
    },
    {
        quote: "Do something today that your future self will thank you for",
        name: "Unknown"
    },
    {
        quote: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
        name: "Victor Hugo"
    },
    {
        quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
        name: "Maya Angelou"
    },
    {
        quote: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known, and even that is an understatement.",
        name: "F. Scott Fitzgerald"
    },
    {
        quote: "The best revenge is massive success.",
        name: "Frank Sinatra"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        name: "Zig Ziglar"
    },
    {
        quote: "Do not let what you cannot do interfere with what you can do.",
        name: "John Wooden"
    },
    {
        quote: "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.",
        name: "George Bernard Shaw"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        name: "Walt Disney"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        name: "Steve Jobs"
    },
    {
        quote: "Fall seven times, stand up eight.",
        name: "Japanese proverb"
    },
    {
        quote: "When you come to the end of your rope, tie a knot and hang on.",
        name: "Franklin D. Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        name: "Nelson Mandela"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        name: "Dalai Lama XIV"
    },
    {
        quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
        name: "Eleanor Roosevelt"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        name: "C.S. Lewis"
    },
    {
        quote: "A leader is one who sees more than others see, who sees farther than others see, and who sees before others see. A leader must be a seer.",
        name: "Leroy Eimes"
    },
    {
        quote: "The art of leadership is saying no, not yes. It is very easy to say yes.",
        name: "Tony Blair"
    },
    {
        quote: "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.",
        name: "John C. Maxwell"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        name: "Sam Levenson"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.” ",
        name: "Franklin D. Roosevelt"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        name: "Wayne Gretzky"
    },
    {
        quote: "A true friend is someone who thinks you're a good egg even though you're half-cracked.",
        name: "Unknown"
    },
    {
        quote: "Friendship is the only cement that will ever hold the world together.",
        name: "Woodrow T. Wilson"
    },
    {
        quote: "You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.",
        name: "Dale Carnegie"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        name: "Mahatma Gandhi"
    },
    {
        quote: "The more I read, the more I acquire, the more certain I am that I know nothing.",
        name: "Voltaire"
    },
    {
        quote: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
        name: "Abigail Adams"
    },
    {
        quote: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.",
        name: "Ambrose Redmoonw"
    },
    {
        quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
        name: "Eleanor Roosevelt"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        name: "Theodore Roosevelt"
    }
];

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = `"${quotes[random].quote}"`;
    author.innerText = quotes[random].name;
})

