import quests from '../quests.js';
const questList = document.getElementById('quest-list');

for(let i = 0; i < quests.length; i++) {
    const questAnchor = document.createElement('a');
    questAnchor.href = 'quest.html?questid=' + encodeURIComponent(quests[i].id);
    questAnchor.textContent = quests[i].title;
    questList.appendChild(questAnchor);
}
