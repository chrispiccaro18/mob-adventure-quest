function initializeHP(race) {
    switch(race) {
        case 'orc':
            return 150;
        case 'human':
            return 100;
        case 'dwarf':
            return 125;
        case 'elf':
            return 75;
        case 'kobold':
            return 55;
    }
}

export default initializeHP;