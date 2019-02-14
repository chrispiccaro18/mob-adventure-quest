import quests from '../quests.js';

const userProfileString = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(userProfileString);

const questTitle = document.getElementById('quest-title');
const questDescription = document.getElementById('quest-description');
const questChoices = document.getElementById('quest-choices');
const hiddenSection = document.getElementById('hidden-section');

const searchParams = new URLSearchParams(window.location.search);
const questToFind = searchParams.get('questid');

let currentQuest = null;
for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    if(quest.id === questToFind) {
        currentQuest = quest;
        break;
    }
}

questTitle.textContent = currentQuest.title;
questDescription.textContent = currentQuest.questDescription;


for(let i = 0; i < currentQuest.choices.length; i++) {
    const choiceLabel = document.createElement('label');

    const choiceRadio = document.createElement('input');

    choiceRadio.type = 'radio';
    choiceRadio.name = 'radio-choices';
    choiceRadio.value = i.toString();
    choiceLabel.textContent = currentQuest.choices[i].description;
    
    choiceLabel.prepend(choiceRadio);
    questChoices.prepend(choiceLabel);
}

questChoices.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(questChoices);
    const value = formData.get('radio-choices');
    
    questChoices.classList.add('hidden');

    const resultsP = document.createElement('p');
    const mapAnchor = document.createElement('a');
    mapAnchor.href = 'map.html';
    mapAnchor.textContent = 'Back to HQ';

    const choice = currentQuest.choices[parseInt(value)];
    
    resultsP.textContent = choice.result;
    hiddenSection.appendChild(resultsP);
    hiddenSection.appendChild(mapAnchor);

    userProfile.hitpoints += choice.hpChange;
    userProfile.gold += choice.goldChange;

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);
});