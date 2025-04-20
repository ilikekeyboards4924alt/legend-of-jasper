import { Rect } from "./rect.js";
export class TexturedRect extends Rect {
    constructor(x, y, w, h, imageOrAnimationFrames) {
        super(x, y, w, h);
        if (Array.isArray(imageOrAnimationFrames)) { // hacky bs to overload the constructor
            this.animationFrames = imageOrAnimationFrames;
            this.image = undefined;
        }
        else {
            this.image = imageOrAnimationFrames;
            this.animationFrames = undefined;
        }
        this.visible = false; // should i always start them invisible? should this.visible be protected?
        this.currentAnimationFrame = 0;
        this.currentAnimationFrameOffset = 0;
    }
    animateUpdate() {
        console.log('empty method');
    }
    draw(camera, offset = true) {
        if (this.visible == false)
            return;
        if (this.animationFrames == undefined) {
            // camera.renderer.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
            camera.drawImage(this.image, this, offset);
        }
        else {
            camera.drawImage(this.animationFrames[this.currentAnimationFrame + this.currentAnimationFrameOffset], this, offset);
            // camera.renderer.ctx.drawImage(this.animationFrames[this.currentAnimationFrame + this.currentAnimationFrameOffset], this.x, this.y, this.w, this.h);
        }
    }
}
