const adviceCategories = {
    motivation: [
        "Believe you can and you're halfway there.",
        "Dream big and dare to fail.",
        "Stay positive, work hard, make it happen.",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Success doesn’t just find you; you have to go out and get it.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Don't stop when you're tired; stop when you're done.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Do something today that your future self will thank you for."
    ],
    
    productivity: [
        "Don’t watch the clock; do what it does. Keep going.",
        "Focus on being productive instead of busy.",
        "Efficiency is doing better what is already being done.",
        "It's not always that we need to do more but rather that we need to focus on less.",
        "Do something today that your future self will thank you for.",
        "Productivity is never an accident. It is always the result of a commitment to excellence.",
        "The way to get started is to quit talking and begin doing.",
        "Small daily improvements are the key to staggering long-term results.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Your mind is for having ideas, not holding them."
    ],
    
    health: [
        "Take care of your body. It's the only place you have to live.",
        "Health is not just about what you're eating. It's also about what you're thinking and saying.",
        "A healthy outside starts from the inside.",
        "Your body deserves the best.",
        "The groundwork for all happiness is good health.",
        "To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear.",
        "Health is a state of body. Wellness is a state of being.",
        "It's never too early or too late to work towards being the healthiest you.",
        "The greatest wealth is health.",
        "You are what you eat, so don't be fast, cheap, easy, or fake."
    ],

    love: [
        "Love is not about how much you say 'I love you,' but how much you can prove that it’s true.",
        "The best thing to hold onto in life is each other.",
        "Love is when the other person’s happiness is more important than your own.",
        "Where there is love, there is life.",
        "Love isn’t something you find. Love is something that finds you.",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "To love and be loved is to feel the sun from both sides.",
        "True love is rare, and it's the only thing that gives life real meaning.",
        "The best love is the kind that awakens the soul.",
        "Love is composed of a single soul inhabiting two bodies."
    ],

    study: [
        "The secret to getting ahead is getting started.",
        "Don’t stop until you’re proud.",
        "Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "Your education is a dress rehearsal for a life that is yours to lead.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Study hard, for the well is deep, and our brains are shallow.",
        "Education is not the learning of facts, but the training of the mind to think.",
        "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        "The expert in anything was once a beginner."
    ],

    friendship: [
        "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’",
        "A real friend is one who walks in when the rest of the world walks out.",
        "Friendship is the only cement that will ever hold the world together.",
        "True friendship comes when the silence between two people is comfortable.",
        "A friend is someone who knows all about you and still loves you.",
        "Friendship is not about whom you have known the longest. It is about who came and never left your side.",
        "A friend is one who overlooks your broken fence and admires the flowers in your garden.",
        "There is nothing on this earth more to be prized than true friendship.",
        "Friendship multiplies the good of life and divides the evil.",
        "A true friend is someone who is there for you when they’d rather be anywhere else."
    ],
    
    coding: [
        "If your code works, don't touch it.",
        "Write code as if the next person to maintain it is a psychopath who knows where you live.",
        "Good code is its own best documentation.",
        "Don’t fix what isn’t broken; improve what is.",
        "Perfect is the enemy of good; if it works, it works.",
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
        "The best code is no code at all; simplicity is key.",
        "Before you optimize, make sure it actually needs optimizing.",
        "Sometimes it's better to leave working code alone than to strive for perfection.",
        "If you’ve built something great, resist the urge to tinker endlessly."
    ],

    shayari: [
        "Kabhi kisi ko itna bhi mat chaho ke,\nKisi ke jaane se zindagi adhoori lagne lage.\nKabhi kisi se itni mohabbat bhi mat karo ke,\nKisi ke bin jeena mushkil lagne lage.",
        "Khuda se maang loon tujhe,\nToh kya khuda dega?\nKehna yahi hai,\nKya taqdeer bhi tujhe mujhse juda karega?",
        "Har waqt dil ko jo sataye,\nAisa koi khwaab ho tum.\nJise dekhne ke baad kabhi aankhen na khule,\nAisa koi khwaab ho tum.",
        "Ishq kiya hai toh jaan bhi doonga,\nYeh dil tere naam kar doonga.\nTu kahe agar toh yeh khwaab chhod doonga,\nBas tujhe apni saanson mein rakh loonga.",
        "Mohabbat mein kab lafzon ki zaroorat hoti hai,\nDil ki baatein samajhne ke liye aankhen kaafi hoti hain.\nEk chehra jo samne ho,\nToh phir saara jahaan bhulane ke liye wahi kaafi hota hai.",
        "Hum bhi ab mohabbat ke geet gaane lage hain,\nHum bhi ab dil lagane lage hain.\nPalkon mein basaane lage hain ek haseen khwaab,\nAur khud hi use tootne se bachaane lage hain.",
        "Kisi se pyaar karo toh itna karo ke,\nTumhara dil hi tumhe usse juda na karne de.\nSapne jo sajao toh use poora karne ki himmat bhi ho,\nVarna akele mein rone ke siwa kuch haath na aaye.",
        "Maine bhi kabhi ishq kiya tha,\nMeri bhi aankhen beqaraar hua karti thi.\nMohabbat ke liye jeena chahta tha,\nPar ab zindagi kisi aur ke naam kar diya.",
        "Nafratein laakh milein par mohabbat na mili,\nZindagi beet gayi magar rahat na mili.\nTeri mehfil mein har gham mila,\nBas woh khushi na mili jiski humein zaroorat na thi.",
        "Dil ke samundar mein ek toofan uth raha hai,\nJo lamhe kho chuke hain woh wapas aa rahe hain.\nPhir wahi khwaab, phir wahi afsaane,\nPhir wahi zindagi hai, par ab tum nahi."
    ]
    
    
};

function getRandomAdvice(category) {
    const categoryArray = adviceCategories[category];
    const randomIndex = Math.floor(Math.random() * categoryArray.length);
    return categoryArray[randomIndex];
}

function RandomAdvice(category) {
    document.getElementById("display-advice").innerText = getRandomAdvice(category);
}
