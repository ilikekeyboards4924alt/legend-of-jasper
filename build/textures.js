let titleImage = new Image(960, 540);
titleImage.src = './textures/title.png';
let playerAnimation = [new Image(96, 243), new Image(96, 243)];
playerAnimation[0].src = './textures/player-left.png';
playerAnimation[1].src = './textures/player-right.png';
let walkCycleAnimation = [];
for (let i = 0; i < 8; i++) {
    let image = new Image(96, 243);
    image.src = `./textures/walkcycle/left/${i + 1}.png`;
    walkCycleAnimation.push(image);
}
for (let i = 0; i < 8; i++) {
    let image = new Image(96, 243);
    image.src = `./textures/walkcycle/right/${i + 1}.png`;
    walkCycleAnimation.push(image);
}
let startButtonAnimation = [new Image(128, 64), new Image(128, 64)];
startButtonAnimation[0].src = './textures/start-button.png';
startButtonAnimation[1].src = './textures/start-button-clicked.png';
export { titleImage, startButtonAnimation, walkCycleAnimation };
