import { baseUrl } from "./Util.js";
function setSource(image, url) {
    image.src = baseUrl + url;
}
let titleImage = new Image(960, 540);
setSource(titleImage, 'textures/title.png');
let walkCycleAnimation = [];
for (let i = 0; i < 8; i++) {
    let image = new Image(96, 243);
    setSource(image, `textures/walkcycle/left/${i + 1}.png`);
    walkCycleAnimation.push(image);
}
for (let i = 0; i < 8; i++) {
    let image = new Image(96, 243);
    setSource(image, `textures/walkcycle/right/${i + 1}.png`);
    walkCycleAnimation.push(image);
}
let startButtonAnimation = [new Image(128, 64), new Image(128, 64)];
setSource(startButtonAnimation[0], 'textures/start-button.png');
setSource(startButtonAnimation[1], 'textures/start-button-clicked.png');
export { titleImage, startButtonAnimation, walkCycleAnimation };
