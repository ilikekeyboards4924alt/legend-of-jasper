import { TexturedRect } from "../components/texturedRect.js";
import { Vector2 } from "../components/vector2.js";
import { gameData } from "../util.js";
export class Player extends TexturedRect {
    constructor() {
        super();
        this.vel = new Vector2();
        this.vel.init(0, 0);
    }
    update() {
        if (this.vel.x < 0)
            this.direction = 'left';
        if (this.vel.x > 0)
            this.direction = 'right';
        if (this.direction == 'left')
            this.currentAnimationFrameOffset = 0;
        if (this.direction == 'right')
            this.currentAnimationFrameOffset = 8;
        this.animateUpdate();
    }
    animateUpdate() {
        if (this.vel.x != 0 || this.vel.y != 0) {
            if (this.frameCounterLastFrame == undefined)
                this.frameCounterLastFrame = gameData.frameCounter;
            if (gameData.frameCounter - this.frameCounterLastFrame > 6) {
                this.currentAnimationFrame = (this.currentAnimationFrame + 1) % 8;
                this.frameCounterLastFrame = gameData.frameCounter;
            }
        }
        else {
            this.currentAnimationFrame = 0;
        }
    }
    move(controller) {
        if (gameData.playerControlsActive == false)
            return;
        if (controller.keys.has('a'))
            this.vel.x = -5;
        if (controller.keys.has('d'))
            this.vel.x = 5;
        if (!controller.keys.has('a') && !controller.keys.has('d'))
            this.vel.x = 0;
        if (controller.keys.has('w'))
            this.vel.y = -5;
        if (controller.keys.has('s'))
            this.vel.y = 5;
        if (!controller.keys.has('w') && !controller.keys.has('s'))
            this.vel.y = 0;
        this.x += this.vel.x;
        this.y += this.vel.y;
    }
}
