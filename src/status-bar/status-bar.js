import loadLocalStorage from '../utilities/load.js';

function statusBar() {
    const userStatus = document.getElementById('user-status');
    
    while(userStatus.firstChild) {
        console.log(userStatus.firstChild);
        userStatus.removeChild(userStatus.firstChild);
    }

    // const jsonProfile = window.localStorage.getItem('userProfile');
    // const userProfile = JSON.parse(jsonProfile);

    const userProfile = loadLocalStorage('userProfile');


    const statusBarName = document.createElement('span');
    const avatarSpan = document.createElement('span');
    const avatar = document.createElement('img');


    switch(userProfile.race) {
        case 'orc':
            avatar.src = './assets/orc.png';
            break;
        case 'human':
            avatar.src = './assets/human.png';
            break;
        case 'dwarf':
            avatar.src = './assets/dwarf.png';
            break;
        case 'elf':
            avatar.src = './assets/elf.png';
            break;
        case 'kobold':
            avatar.src = './assets/kobold.png';
            break;
    }

    
    statusBarName.textContent = userProfile.username;
    avatarSpan.appendChild(avatar);
    userStatus.appendChild(avatarSpan);
    userStatus.appendChild(statusBarName);
    avatar.classList.add('icons');
    
    const statusBarHP = document.createElement('span');
    userStatus.appendChild(statusBarHP);
    statusBarHP.textContent = 'HP: ' + userProfile.hitpoints;
    
    const statusBarGold = document.createElement('span');
    userStatus.appendChild(statusBarGold);
    statusBarGold.textContent = 'Gold: ' + userProfile.gold;
}

export default statusBar;