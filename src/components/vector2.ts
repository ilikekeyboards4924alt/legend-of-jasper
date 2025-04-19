export class Vector2 {
    x: number;
    y: number;

    constructor() {

    }

    init(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.hypot(this.x, this.y);
    }
}