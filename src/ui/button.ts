import { Mouse } from "../controller.js";
import { Rect } from "../components/rect.js";
import { gameData } from "../util.js";
import { TexturedRect } from "../components/texturedRect.js";

export class Button extends TexturedRect {
    frameClicked: number;
    updateInteraction: boolean;
    beingClicked: boolean;

    constructor() {
        super();
    }

    update(mouse: Mouse) {
        if (this.visible == false) return;

        let mouseRect: Rect = new Rect();
        mouseRect.init(mouse.x, mouse.y, 1, 1);
        if (this.collision(mouseRect) && mouse.lmb && !mouse.alreadyClicked) {
            mouse.alreadyClicked = true;
            this.beingClicked = true;
        }
        if (!mouse.lmb && !mouse.alreadyClicked && this.beingClicked) {
            this.frameClicked = gameData.frameCounter;
            this.interact();
        }

        if (this.updateInteraction == true) this.interactionUpdate();
        if (mouse.lmb == false) this.beingClicked = false;

        this.animateUpdate();
    }

    protected interact() { // put functionality in here if everything happens in ONE FRAMES
        console.log('empty method');
    }

    protected interactionUpdate() { // put functionality in here if everything happens over MULTIPLE FRAMES
        console.log('empty method');
    }
}