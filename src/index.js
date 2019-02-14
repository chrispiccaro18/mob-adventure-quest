const signIn = document.getElementById('sign-in');

signIn.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(signIn);

    const userProfile = {
        username: formData.get('user-name'),
        race: formData.get('race'),
        hitpoints: 50,
        gold: 0
    };

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);
    window.location = 'map.html';
});

