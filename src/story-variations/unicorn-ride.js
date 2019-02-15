import loadLocalStorage from '../utilities/load.js';

function unicornRide() {
    // const json = window.localStorage.getItem('userProfile');
    // const userProfile = JSON.parse(json);
    const userProfile = loadLocalStorage('userProfile');

    if(userProfile.race === 'elf') {
        return 'The unicorn graciously bows its head, inviting you to alight atop its back.  Both of you ride into the sunset.';
    }
    return 'A unicorn cannot be tamed, Dufus. It tramples you, then skewers you with its horn. You die!';

}

export default unicornRide;