const fire = {
    id: 'fire',
    title: 'burning village',
    imgSrc: './assets/villagefire.jpg',
    audioSrc: '../../assets/fire.mp3',
    questDescription: 'You see a burning village. What do you do?',
    choices: [
        {
            description: 'run in and try to save village',
            hpChange: -20,
            goldChange: 50,
            result: 'The villagers love you and shower you with gold.'
        },
        {
            description: 'dump more gasoline on the village',
            hpChange: -30,
            goldChange: -5,
            result: 'The village is no more and you have to buy new shoes.'
        },
        {
            description: 'watch it burn',
            hpChange: 0,
            goldChange: 15,
            result: 'The flames are pretty. You salvaged some goodies'
        }
    ]
};

const flood = {};
const blood = {};

const quests = [fire, flood, blood];



export default quests;