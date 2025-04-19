export class Renderer {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    color(r, g, b) {
        this.ctx.fillStyle = `rgb(${r},${g},${b})`;
    }
    drawImageWithTransparency(img, x, y, alpha) {
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.drawImage(img, x, y);
        this.ctx.restore();
    }
}
