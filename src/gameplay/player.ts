import { TexturedRect } from "../components/texturedrect.js";
import { Vector2 } from "../components/vector2.js";
import { Controller } from "../core/controller.js";
import { gameData } from "../core/util.js";

export class Player extends TexturedRect {
    direction: Vector2;
    vel: Vector2;
    
    constructor(x: number, y: number, w: number, h: number, imageOrAnimationFrames?: HTMLImageElement | HTMLImageElement[]) {
        super(x, y, w, h, imageOrAnimationFrames);
        this.vel = new Vector2(0, 0);
        this.direction = new Vector2(0, 0);
    }

    update() {
        if (this.vel.x < 0) this.direction.x = -1;
        if (this.vel.x > 0) this.direction.x = 1;

        if (this.direction.x == -1) this.currentAnimationFrameOffset = 0;
        if (this.direction.x == 1) this.currentAnimationFrameOffset = 8;
    
        this.animateUpdate();
    }

    protected animateUpdate() {
        if (this.vel.x != 0 || this.vel.y != 0) {
            if (this.frameCounterLastFrame == undefined) this.frameCounterLastFrame = gameData.frameCounter;
            if (gameData.frameCounter - this.frameCounterLastFrame > 6) {
                this.currentAnimationFrame = (this.currentAnimationFrame + 1)%8;
                this.frameCounterLastFrame = gameData.frameCounter;
            }
        } else {
            this.currentAnimationFrame = 0;
        }
    }

    move(controller: Controller) {
        if (gameData.playerControlsActive == false) return;

        if (controller.keys.has('a')) this.vel.x = -5;
        if (controller.keys.has('d')) this.vel.x = 5;
        if (!controller.keys.has('a') && !controller.keys.has('d')) this.vel.x = 0;
        if (controller.keys.has('w')) this.vel.y = -5;
        if (controller.keys.has('s')) this.vel.y = 5;
        if (!controller.keys.has('w') && !controller.keys.has('s')) this.vel.y = 0;

        this.x += this.vel.x;
        this.y += this.vel.y;
    }
}