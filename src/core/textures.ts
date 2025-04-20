import { baseUrl } from "./util.js";

function setSource(image: HTMLImageElement, url: string) {
    image.src = baseUrl + url;
}

let titleImage: HTMLImageElement = new Image(960, 540);
setSource(titleImage, 'textures/title.png');

let logoImage: HTMLImageElement = new Image(960, 540);
setSource(logoImage, 'textures/logo.png');

let walkCycleAnimation: HTMLImageElement[] = [];
for (let i = 0; i < 8; i++) {
    let image: HTMLImageElement = new Image(96, 243);
    setSource(image, `textures/walkcycle/left/${i+1}.png`);
    walkCycleAnimation.push(image);
}
for (let i = 0; i < 8; i++) {
    let image: HTMLImageElement = new Image(96, 243);
    setSource(image, `textures/walkcycle/right/${i+1}.png`);
    walkCycleAnimation.push(image);
}
(() => {
    let image = new Image(96, 243);
    setSource(image, 'textures/walkcycle/left/idle.png');
    walkCycleAnimation.push(image);
})();
(() => {
    let image = new Image(96, 243);
    setSource(image, 'textures/walkcycle/right/idle.png');
    walkCycleAnimation.push(image);
})();

let startButtonAnimation: HTMLImageElement[] = [new Image(128, 64), new Image(128, 64)];
setSource(startButtonAnimation[0], 'textures/start-button.png');
setSource(startButtonAnimation[1], 'textures/start-button-clicked.png');

let signDecorImage: HTMLImageElement = new Image(102, 105);
setSource(signDecorImage, 'textures/sign-decor.png')

let backgroundImage: HTMLImageElement = new Image(960, 540);
setSource(backgroundImage, 'textures/background.png');

export { titleImage, startButtonAnimation, walkCycleAnimation, logoImage, signDecorImage, backgroundImage };