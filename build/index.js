import { gameData } from "./core/util.js";
import { run } from "./core/engine.js";
function main() {
    run();
}
setInterval(() => {
    if (gameData.documentFocused) {
        main();
        gameData.frameCounter++;
    }
}, 1000 / 60);
