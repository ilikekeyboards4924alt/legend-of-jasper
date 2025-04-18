import { Renderer } from "../Renderer.js";
import { Rect } from "./Rect.js";

export class TexturedRect extends Rect {
    image: HTMLImageElement; // use for one static textures
    
    animationFrames: HTMLImageElement[]; // use for animation
    currentAnimationFrame: number;
    currentAnimationFrameOffset: number; // offset by certain amount to get new animation set e.g. left vs right animations

    frameCounterLastFrame: number; // the frame count when the last animation frame was changed/displayed

    visible: boolean;

    constructor() {
        super();
        this.visible = false;
        this.currentAnimationFrame = 0;
        this.currentAnimationFrameOffset = 0;
    }

    initTexture(image: HTMLImageElement) {
        this.image = image;
    }

    initAnimation(animationFrames: HTMLImageElement[]) {
        this.animationFrames = animationFrames;
    }

    protected animateUpdate() { // update animations n stuff here
        console.log('empty method');
    }

    draw(renderer: Renderer) {
        if (this.visible == false) return;

        if (this.animationFrames == undefined) {
            renderer.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        } else {
            renderer.ctx.drawImage(this.animationFrames[this.currentAnimationFrame + this.currentAnimationFrameOffset], this.x, this.y, this.w, this.h);
        }
    }
}