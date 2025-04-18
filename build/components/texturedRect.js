import { Rect } from "./rect.js";
export class TexturedRect extends Rect {
    constructor() {
        super();
        this.visible = false;
        this.currentAnimationFrame = 0;
        this.currentAnimationFrameOffset = 0;
    }
    initTexture(image) {
        this.image = image;
    }
    initAnimation(animationFrames) {
        this.animationFrames = animationFrames;
    }
    animateUpdate() {
        console.log('empty method');
    }
    draw(renderer) {
        if (this.visible == false)
            return;
        if (this.animationFrames == undefined) {
            renderer.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }
        else {
            renderer.ctx.drawImage(this.animationFrames[this.currentAnimationFrame + this.currentAnimationFrameOffset], this.x, this.y, this.w, this.h);
        }
    }
}
