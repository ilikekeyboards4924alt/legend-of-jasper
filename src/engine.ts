import { titleScreenMusic } from "./audio.js";
import { button, controller, logo, player, renderer, titleCard } from "./init.js";
import { gameData } from "./util.js";

export function run() {
    renderer.ctx.fillRect(0,0,renderer.canvas.width,renderer.canvas.height);
    renderer.color(0,0,0);
    
    controller.update();
    
    logo.draw(renderer);
    titleCard.draw(renderer);
    
    button.update(controller.mouse);
    button.draw(renderer)

    player.move(controller);
    player.update();
    player.draw(renderer);
    
    if (gameData.state == 0) {
        if (gameData.frameCounter >= 0) logo.visible = true;
        if (gameData.frameCounter > 120) logo.visible = false;
        if (gameData.frameCounter > 130) gameData.state = 1;
    }
    
    if (gameData.state == 1) {
        if (gameData.frameCounter > 150) {
            titleCard.visible = true;
            button.visible = true;
        }
    }
    
    if (gameData.state == 2) {
        titleCard.visible = false;
        renderer.color(100,100,255);
        gameData.playerControlsActive = true;
        player.visible = true;
    }
}

document.addEventListener('click', _ => {
    gameData.documentFocused = true;

    document.getElementsByClassName('item')[0]?.remove();
    document.querySelector('canvas').style = 'display: flex; border: 2px solid black;';

    titleScreenMusic.play().then(_ => { // move this out of the event listener at some point
        titleScreenMusic.controls = true;
        titleScreenMusic.volume = 0.2;
        titleScreenMusic.loop = true;
    })
});