export class Renderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    color(r: number, g: number, b: number) {
        this.ctx.fillStyle = `rgb(${r},${g},${b})`;
    }

    drawImageWithTransparency(img: HTMLImageElement, x: number, y: number, alpha: number) {
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.drawImage(img, x, y);
        this.ctx.restore();
    }
}