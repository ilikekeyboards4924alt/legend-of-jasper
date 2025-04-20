let gameData = {
    state: 0,
    frameCounter: 0,
    playerControlsActive: false,
    documentFocused: false
};
let baseUrl = './build/';
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
export { gameData, baseUrl, random };
