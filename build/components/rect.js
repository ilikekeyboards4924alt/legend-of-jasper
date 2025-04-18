export class Rect {
    constructor() {
    }
    init(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    collision(rect) {
        return this.x < rect.x + rect.w && this.x + this.w > rect.x && this.y < rect.y + rect.h && this.y + this.h > rect.y ? true : false;
    }
}
