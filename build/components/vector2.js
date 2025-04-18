export class Vector2 {
    constructor() {
    }
    init(x, y) {
        this.x = x;
        this.y = y;
    }
    magnitude() {
        return Math.hypot(this.x, this.y);
    }
}
