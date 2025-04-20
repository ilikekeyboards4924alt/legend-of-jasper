import { Camera } from "../gameplay/camera.js";
import { Renderer } from "../renderer.js";
import { Rect } from "./rect.js";

export class TexturedRect extends Rect {
    image: HTMLImageElement; // use for one static texture

    animationFrames: HTMLImageElement[]; // use for animations
    currentAnimationFrame: number; // current frame
    currentAnimationFrameOffset: number; // offset by certain amount to get new animation set e.g. left vs right animations (is this the best way to switch between animations?)

    frameCounterLastFrame: number; // the frame count when the last animation frame was changed/displayed, use this to get time between frames

    visible: boolean;

    constructor(x: number, y: number, w: number, h: number, imageOrAnimationFrames?: HTMLImageElement | HTMLImageElement[]) {
        super(x, y, w, h);

        if (Array.isArray(imageOrAnimationFrames)) { // hacky bs to overload the constructor
            this.animationFrames = imageOrAnimationFrames;
            this.image = undefined;
        } else {
            this.image = imageOrAnimationFrames;
            this.animationFrames = undefined;
        }

        this.visible = false; // should i always start them invisible? should this.visible be protected?
        this.currentAnimationFrame = 0;
        this.currentAnimationFrameOffset = 0;
    }

    protected animateUpdate() { // update animations n stuff here
        console.log('empty method');
    }

    draw(camera: Camera, offset: boolean = true) { // remove this when camera is implemented
        if (this.visible == false) return;

        if (this.animationFrames == undefined) {
            // camera.renderer.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
            camera.drawImage(this.image, this, offset);
        } else {
            camera.drawImage(this.animationFrames[this.currentAnimationFrame + this.currentAnimationFrameOffset], this, offset);
            // camera.renderer.ctx.drawImage(this.animationFrames[this.currentAnimationFrame + this.currentAnimationFrameOffset], this.x, this.y, this.w, this.h);
        }
    }
}