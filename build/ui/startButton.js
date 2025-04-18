import { Button } from "./button.js";
import { gameData } from "../util.js";
export class StartButton extends Button {
    constructor() {
        super();
    }
    interact() {
        this.updateInteraction = true;
    }
    interactionUpdate() {
        if (gameData.frameCounter - this.frameClicked > 60) {
            gameData.state = 2;
            this.updateInteraction = false;
            this.visible = false;
        }
    }
    animateUpdate() {
        if (this.beingClicked == false)
            this.currentAnimationFrame = 0;
        if (this.beingClicked == true)
            this.currentAnimationFrame = 1;
    }
}
