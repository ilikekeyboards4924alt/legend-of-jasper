import { Renderer } from "./Renderer.js";
import { Controller } from "./Controller.js";
import { titleImage, startButtonAnimation, walkCycleAnimation } from "./Textures.js";
import { StartButton } from "./ui/StartButton.js";
import { gameData } from "./Util.js";
import { TexturedRect } from "./components/TexturedRect.js";
import { Player } from "./gameplay/Player.js";

import { titleScreenMusic } from "./Audio.js";
console.log(titleScreenMusic);

let renderer: Renderer = new Renderer();
let controller: Controller = new Controller();

renderer.canvas.width = 960;
renderer.canvas.height = 540;

document.addEventListener('keydown', event => controller.keyHandler(event));
document.addEventListener('keyup', event => controller.keyHandler(event));
document.addEventListener('mousemove', event => controller.mouseMoveHandler(event, renderer.canvas));
document.addEventListener('mousedown', event => controller.mouseButtonHandler(event));
document.addEventListener('mouseup', event => controller.mouseButtonHandler(event));

let titleCard: TexturedRect = new TexturedRect();
titleCard.init(0,0,960,540);
titleCard.initTexture(titleImage);

let button: StartButton = new StartButton();
button.init(renderer.canvas.width/2 - 128/2, renderer.canvas.height/2 - 128/2, 128, 64);
button.initAnimation(startButtonAnimation);

let player: Player = new Player();
player.init(0, 0, 96*2/3, 243*2/3);
player.initAnimation(walkCycleAnimation);

function main() {
    renderer.ctx.fillRect(0,0,renderer.canvas.width,renderer.canvas.height);
    renderer.color(0,0,0);
    
    controller.update();
    
    button.update(controller.mouse);
    button.draw(renderer)
    
    titleCard.draw(renderer);

    player.move(controller);
    player.update();
    player.draw(renderer);
    
    if (gameData.state == 0) {
        if (gameData.frameCounter >= 0) titleCard.visible = true;
        if (gameData.frameCounter > 120) titleCard.visible = false;
        if (gameData.frameCounter > 130) gameData.state = 1;
    }
    
    if (gameData.state == 1) {
        if (gameData.frameCounter > 150) {
            button.visible = true;
        }
    }
    
    if (gameData.state == 2) {
        renderer.color(100,100,255);
        gameData.playerControlsActive = true;
        player.visible = true;
    }
}


let documentFocused: boolean = false;
document.addEventListener('click', _ => {
    documentFocused = true;
});

setInterval(() => {
    if (documentFocused) {
        main();
        gameData.frameCounter++;
    }
}, 1000/60);