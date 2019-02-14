import statusBar from '../status-bar/status-bar.js';

import quests from '../quests.js';
const questList = document.getElementById('quest-list');

statusBar();

let completedQuests = [];
const jsonQuest = window.localStorage.getItem('completedQuests');

if(jsonQuest) {
    completedQuests = JSON.parse(jsonQuest);
}
const strungQuest = JSON.stringify(completedQuests);
window.localStorage.setItem('completedQuests', strungQuest);

for(let i = 0; i < quests.length; i++) {

    const questCheck = completedQuests.includes(quests[i].id);
    if(questCheck) {
        continue; 
    }
    
    const questAnchor = document.createElement('a');
    questAnchor.href = 'quest.html?questid=' + encodeURIComponent(quests[i].id);
    questAnchor.textContent = quests[i].title;
    questList.appendChild(questAnchor);
}

