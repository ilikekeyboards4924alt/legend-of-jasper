import { Rect } from "../components/Rect.js";
import { TexturedRect } from "../components/TexturedRect.js";
export class Button extends TexturedRect {
    constructor() {
        super();
    }
    update(mouse) {
        if (this.visible == false)
            return;
        let mouseRect = new Rect();
        mouseRect.init(mouse.x, mouse.y, 1, 1);
        if (this.collision(mouseRect) && mouse.lmb && !mouse.alreadyClicked) {
            mouse.alreadyClicked = true;
            this.beingClicked = true;
        }
        if (!mouse.lmb && !mouse.alreadyClicked && this.beingClicked) {
            this.interact();
        }
        if (this.updateInteraction == true)
            this.interactionUpdate();
        if (mouse.lmb == false)
            this.beingClicked = false;
        this.animateUpdate();
    }
    interact() {
        console.log('empty method');
    }
    interactionUpdate() {
        console.log('empty method');
    }
}
