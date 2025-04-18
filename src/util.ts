interface GameData {
    state: number; // 0 title screen, 1 main menu, 2 game
    frameCounter: number;
    playerControlsActive: boolean;
}

let gameData: GameData = { 
    state: 0, 
    frameCounter: 0, 
    playerControlsActive: false
};

export { gameData };