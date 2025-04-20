import { titleScreenMusic } from "./audio.js";
import { background, button, camera, controller, decors, logo, player, renderer, titleCard } from "./init.js";
import { gameData } from "./util.js";
export function run() {
    renderer.color(0, 0, 0);
    controller.update();
    background.draw(camera);
    logo.draw(camera, false);
    titleCard.draw(camera, false);
    button.update(controller.mouse);
    button.draw(camera, false);
    decors.forEach(decor => {
        decor.draw(camera);
    });
    player.move(controller);
    player.update();
    camera.center(player);
    player.draw(camera);
    background.update(player);
    if (gameData.state == 0) {
        if (gameData.frameCounter >= 0)
            logo.visible = true;
        if (gameData.frameCounter > 120)
            logo.visible = false;
        if (gameData.frameCounter > 130)
            gameData.state = 1;
    }
    if (gameData.state == 1) {
        if (gameData.frameCounter > 150) {
            titleCard.visible = true;
            button.visible = true;
        }
    }
    if (gameData.state == 2) {
        gameData.playerControlsActive = true;
        renderer.color(100, 100, 255);
        titleCard.visible = false;
        player.visible = true;
        decors.forEach(decor => decor.visible = true);
        background.sections.forEach(row => {
            row.forEach(section => {
                section.visible = true;
            });
        });
    }
}
document.addEventListener('click', _ => {
    var _a;
    gameData.documentFocused = true;
    (_a = document.getElementsByClassName('item')[0]) === null || _a === void 0 ? void 0 : _a.remove();
    document.querySelector('canvas').style = 'display: flex; border: 2px solid black;';
    titleScreenMusic.play().then(_ => {
        titleScreenMusic.controls = true;
        titleScreenMusic.volume = 0.2;
        titleScreenMusic.loop = true;
    });
});
