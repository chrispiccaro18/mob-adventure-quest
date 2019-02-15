function initializeGold(race) {
    switch(race) {
        case 'orc':
            return 10;
        case 'human':
            return 25;
        case 'dwarf':
            return 50;
        case 'elf':
            return 50;
        case 'kobold':
            return 15;
    }
}

export default initializeGold;