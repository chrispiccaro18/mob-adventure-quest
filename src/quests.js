const fire = {
    id: 'fire',
    title: 'burning village',
    imgSrc: './assets/villagefire.jpg',
    audioSrc: '../../assets/fire-sound.mp3',
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
    imgSrc: './assets/dragon.jpg',
    audioSrc: '../../assets/dragon-sound.mp3',
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
    imgSrc: './assets/unicorn.png',
    audioSrc: '../../assets/unicorn-sound.mp3',
    questDescription: 'You are on a lovely stroll and encounter a majestic unicorn. What do you do?', 
    choices: [
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

const tavern = {
    id: 'tavern',
    title: 'Check Out The Local Tavern',
    imgSrc: './assets/tavern.png',
    audioSrc: '../../assets/tavern-sound.mp3',
    questDescription: `
        Outside the tavern a man crashes through the front door. His 
        ejector shouts obscenities but leaves the door open. You walk over 
        the drunk's inert body and into the bright light from the dark night.
        You stop in the threshold and scan the room, everone hushes and all 
        eyes fall to you. As quickly as the patrons stopped what they were 
        doing to give you the once-over the tavern returns to chaos.
        What do you do?
    `,
    choices: [{
        id: 'antagonize',
        description: 'These lushes look like easy targets. Punch the nearest sucker!',
        result: `
            After knocking out a most of the fools the proprietor interceeds 
            with a chair to the back of your head. You wake up a few hours 
            later in his office. Despite what you expect he's happy with you. 
            He clears up the confusion by informing you the fools you knocked 
            out are bandits. Although he likes the amount of booze they buy, 
            they've been creating a poor atmosphere. He hopes you sent them a 
            message, clean up your act in this establishment, and he sent them 
            one, we're still friends. You're head hurts, still confused by the 
            owner's explanation, but your coin pouch feels a lighter heavier.
            You gain 5 gold but lose 10 health.
        `,
        hpChange: -10,
        goldChange: 5
    }, {
        id: 'converse',
        description: `
            There's an interesting female elf in the corner still staring at you. 
            Let's go see what she knows...
        `,
        result: `
            She buys you a drink and invites you to sit. You are showered with 
            compliments from her and she offers you in on a deal that sounds too 
            good to be true. Your eyes feel heavy and the last thing you see is 
            the elf smiling from cheek to cheek. You wake up in the alleyway 
            thankful to still have your clothes. Your stomach burns for the next 
            few days while you think of a better story to tell your friends. A 
            night you could never forget if you could only remember it... You lose
            10 gold and 5 health.
        `,
        hpChange: -5,
        goldChange: -10
    }, {
        id: 'drink',
        description: 'Buy a drink. See if you can get some information from the bartender',
        result: `
            He talks your ear off about the gossip around town. The blacksmith 
            is missing his daughter, bandits around town, and the manure the 
            town uses is running low (but it still smells terrible). Fortunately 
            the drinks are good. After a few you call it a night. You lose 5 gold.
        `,
        hpChange: 0,
        goldChange: -5
    }]
};

const quests = [fire, dragon, unicorn, tavern];



export default quests;