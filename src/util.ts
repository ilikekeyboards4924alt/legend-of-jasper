interface GameData {
    state: number; // 0 title screen, 1 main menu, 2 game
    frameCounter: number;
    playerControlsActive: boolean;
    documentFocused: boolean
}

let gameData: GameData = { 
    state: 0, 
    frameCounter: 0, 
    playerControlsActive: false,
    documentFocused: false
};

let baseUrl: string = './build/';

export { gameData, baseUrl };