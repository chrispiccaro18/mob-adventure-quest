const fire = {
    id: 'fire',
    title: 'burning village',
    imgSrc: './assets/villagefire.jpg',
    audioSrc: '../../assets/fire.mp3',
    questDescription: 'You see a burning village. What do you do?',
    choices: [
        {
            description: 'run in and try to save village',
            hpChange: -25,
            goldChange: 50,
            result: 'The villagers love you and shower you with gold. You lose 25 health points and gain 50 gold.'
        },
        {
            description: 'dump more gasoline on the village',
            hpChange: -25,
            goldChange: -5,
            result: 'The village is no more and you have to buy new shoes. You lose 25 health points and lose 5 gold.'
        },
        {
            description: 'watch it burn',
            hpChange: 10,
            goldChange: 25,
            result: 'The flames are pretty. You salvage some goodies, gain 10 health points, and gain 25 gold.'

        }
    ]
};

const dragon = {
    id: 'dragon',
    title: 'dragon keep',
    imgSrc: './assets/villagefire.jpg',
    audioSrc: '../../assets/fire.mp3',
    questDescription: 'A dragon is attacking the village of Ith. You successfully infiltrate her lair and see a mountain of gold, jewels and treasure. What do you do?',
    choices: [
        {
            description: 'Negotiate with the dragon by giving her a sheep.',
            hpChange: 15,
            goldChange: 50,
            result: 'The dragon is amused by your sheep, humors you with some gold. You gain 15 health points and 50 gold.'
        },
        {
            description: 'Brandish your sword and yell "hazzuhhhh!"',
            hpChange: -45,
            goldChange: 500,
            result: 'You defeat the dragon, but suffer significant losses. You lose 45 health points, but gain 500 gold.'
        },
        {
            description: 'Set a dragon trap.',
            hpChange: -10,
            goldChange: 100,
            result: 'You grab what you can, while the dragon is entangled. You lose 10 health points and gain 100 gold.'
        }
    ]
};

const unicorn = {
    id: 'unicorn',
    title: 'majestic unicorn',
    imgSrc: './assets/villagefire.jpg',
    audioSrc: '../../assets/fire.mp3',
    questDescription: 'You are on a lovely stroll and encounter a majestic unicorn. What do you do?' [
        {
            description: 'Approach and pet.',
            hpChange: 100,
            goldChange: 0,
            result: 'A healing rainbow engulfs you. You gain 100 health points and no gold, though you could sell the story.'
        },
        {
            description: 'Wrangle and ride!',
            hpChange: -200,
            goldChange: 0,
            result: 'A unicorn cannot be tamed, Dufus. It tramples you, then skewers you with its horn. You die!'
        },
        {
            description: 'Run away!',
            hpChange: -30,
            goldChange: 20,
            result: 'The unicorn takes a swipe at you, which is worth a couple free beers at the tavern when you tell the story. You lose 30 health points and gain 20 gold.'
        }
    ]
};



const quests = [fire, dragon, unicorn];



export default quests;