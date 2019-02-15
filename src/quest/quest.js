import quests from '../quests.js';
import statusBar from '../status-bar/status-bar.js';

const userProfileString = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(userProfileString);

const questTitle = document.getElementById('quest-title');
const questDescription = document.getElementById('quest-description');
const questChoices = document.getElementById('quest-choices');
const imageContainer = document.getElementById('image-container');
const hiddenSection = document.getElementById('hidden-section');

const searchParams = new URLSearchParams(window.location.search);
const questToFind = searchParams.get('questid');

statusBar();

let currentQuest = null;
for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    if(quest.id === questToFind) {
        currentQuest = quest;
        break;
    }
}

const audio = new Audio(currentQuest.audioSrc);
audio.play();
questTitle.textContent = currentQuest.title;
const questImage = document.createElement('img');
questImage.src = currentQuest.imgSrc;
questImage.alt = currentQuest.title;
imageContainer.appendChild(questImage);
questDescription.textContent = currentQuest.questDescription;


for(let i = 0; i < currentQuest.choices.length; i++) {
    const choiceLabel = document.createElement('label');

    const choiceRadio = document.createElement('input');

    choiceRadio.type = 'radio';
    choiceRadio.name = 'radio-choices';
    choiceRadio.value = i.toString();
    choiceLabel.textContent = currentQuest.choices[i].description;
    
    choiceLabel.prepend(choiceRadio);
    questChoices.appendChild(choiceLabel);
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
    
    let json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);

    json = window.localStorage.getItem('completedQuests');
    const completedQuests = JSON.parse(json);
    completedQuests.push(currentQuest.id);
    json = JSON.stringify(completedQuests);
    window.localStorage.setItem('completedQuests', json);
    
    if(userProfile.hitpoints <= 0) {
        mapAnchor.href = 'end.html';
        mapAnchor.textContent = 'See the Ending';
    }

    if(completedQuests.length === quests.length) {
        mapAnchor.href = 'end.html';
        mapAnchor.textContent = 'See the Ending';
    }

    statusBar();
});