import { Mouse } from "../controller.js";
import { Rect } from "../components/rect.js";
import { gameData } from "../util.js";
import { TexturedRect } from "../components/texturedrect.js";

export class Button extends TexturedRect {
    frameClicked: number;
    updateInteraction: boolean;
    beingClicked: boolean;

    constructor(x: number, y: number, w: number, h: number, imageOrAnimationFrames?: HTMLImageElement | HTMLImageElement[]) {
        super(x, y, w, h, imageOrAnimationFrames);
    }

    update(mouse: Mouse) { // is this the best way to do this?
        if (this.visible == false) return;

        let mouseRect: Rect = new Rect(mouse.x, mouse.y, 1, 1);
        if (this.collision(mouseRect) && mouse.lmb && !mouse.alreadyClicked) {
            mouse.alreadyClicked = true;
            this.beingClicked = true;
        }
        if (!mouse.lmb && !mouse.alreadyClicked && this.beingClicked) {
            this.interact();
        }

        if (this.updateInteraction == true) this.interactionUpdate();
        if (mouse.lmb == false) this.beingClicked = false;

        this.animateUpdate();
    }

    protected interact() { // put functionality in here if everything happens in ONE FRAMES
        console.log('empty method');
    }

    protected interactionUpdate() { // put functionality in here if everything happens over MULTIPLE FRAMES (should this just go in update?)
        console.log('empty method');
    }
}