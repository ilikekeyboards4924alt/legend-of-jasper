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
function lerp(value, targetValue) {
    return value + (targetValue - value) * 0.1;
}
export { gameData, baseUrl, random, lerp };
