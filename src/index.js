import initializeHP from './character-creation/initialize-hp.js';
import initializeGold from './character-creation/initialize-gold.js';

const signIn = document.getElementById('sign-in');

signIn.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(signIn);

    const initialHP = initializeHP(formData.get('race'));
    const initialGold = initializeGold(formData.get('race'));

    const userProfile = {
        username: formData.get('user-name'),
        race: formData.get('race'),
        hitpoints: initialHP,
        gold: initialGold
    };

    console.log(userProfile);

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);
    window.location = 'map.html';
});

