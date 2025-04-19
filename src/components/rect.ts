export class Rect {
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    collision(rect: Rect) {
        return this.x < rect.x + rect.w && this.x + this.w > rect.x && this.y < rect.y + rect.h && this.y + this.h > rect.y ? true : false;
    }
}