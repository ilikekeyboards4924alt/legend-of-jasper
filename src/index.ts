import { gameData } from "./util.js";
import { run } from "./engine.js";

function main() {
    run();
}

setInterval(() => {
    if (gameData.documentFocused) {
        main();
        gameData.frameCounter++;
    }
}, 1000/60);