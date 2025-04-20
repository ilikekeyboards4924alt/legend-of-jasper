import { Vector2 } from "../components/vector2.js";
import { lerp } from "./util.js";
export class Camera {
    constructor(renderer) {
        this.offset = new Vector2(0, 0);
        this.renderer = renderer;
    }
    center(rect) {
        this.offset.x = lerp(this.offset.x, rect.x + Math.floor(rect.w / 2) - Math.floor(this.renderer.canvas.width / 2));
        this.offset.y = lerp(this.offset.y, rect.y + Math.floor(rect.h / 2) - Math.floor(this.renderer.canvas.height / 2));
        // this.offset.x = rect.x + Math.floor(rect.w/2) - Math.floor(this.renderer.canvas.width/2);
        // this.offset.y = rect.y + Math.floor(rect.h/2) - Math.floor(this.renderer.canvas.height/2);
        // clamps the player's camera between the world's 4 borders
        // this.offset.x = Math.min(Math.max(world.border.left, this.offset.x), world.border.right - this.renderer.width);
        // this.offset.y = Math.min(Math.max(world.border.top, this.offset.y), world.border.bottom - this.renderer.height);
    }
    drawImage(image, rect, offset = true) {
        if (offset) {
            this.renderer.ctx.drawImage(image, rect.x - this.offset.x, rect.y - this.offset.y, rect.w, rect.h);
        }
        else {
            this.renderer.ctx.drawImage(image, rect.x, rect.y, rect.w, rect.h);
        }
    }
}
