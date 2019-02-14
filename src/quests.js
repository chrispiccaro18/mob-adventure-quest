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
            result: 'The villagers love you and shower you with gold.'
        },
        {
            description: 'dump more gasoline on the village',
            hpChange: -25,
            goldChange: -5,
            result: 'The village is no more and you have to buy new shoes.'
        },
        {
            description: 'watch it burn',
            hpChange: 10,
            goldChange: 25,
            result: 'The flames are pretty. You salvaged some goodies'
        }
    ]
};

const dragon = {
    id: 'dragon',
    title: 'dragon keep',
    imgSrc: './assets/villagefire.jpg',
    audioSrc: '../../assets/fire.mp3',
    questDescription: 'A dragon is attacking the village of ___. You successfully infiltrate her lair and see a mountain of gold, jewels and treasure.',
    choices: [
        {
            description: 'Negotiate with the dragon by giving them a sheep.',
            hpChange: 15,
            goldChange: 50,
            result: 'The dragon is amused by your sheep, humors you with some gold. You gain 15 health points and 50 gold'
        },
        {
            description: 'Brandish your sword and yell "hazzuhhhh!"',
            hpChange: -45,
            goldChange: 500,
            result: 'You defeated the dragon, but suffered significant losses.'
        },
        {
            description: 'Set a dragon trap.',
            hpChange: -10,
            goldChange: 100,
            result: 'You grabbed what you could, while the dragon was entangled.'
        }
    ]
};


const blood = {};

const quests = [fire, dragon, blood];



export default quests;