import statusBar from '../status-bar/status-bar.js';

const endMessage = document.getElementById('end-message');
const imageContainer = document.getElementById('image-container');

let json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

json = window.localStorage.getItem('completedQuests');
const completedQuests = JSON.parse(json);

const image = document.createElement('img');    
if(userProfile.hitpoints <= 0) {
    endMessage.textContent = 'Death comes for you.';
    image.src = './assets/reaper.jpg';
} else {
    endMessage.textContent = 'Winner, winner, chicken dinner!';
    image.src = './assets/winner.png';    
}
imageContainer.appendChild(image);

statusBar();

