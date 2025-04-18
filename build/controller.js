export class Controller {
    constructor() {
        this.keys = new Set();
        this.mouse = { x: 0, y: 0, lmb: false, rmb: false, alreadyClicked: false };
    }
    update() {
        if (this.mouse.lmb == false)
            this.mouse.alreadyClicked = false;
    }
    keyHandler(event) {
        if (event.type == 'keydown' && !this.keys.has(event.key)) {
            this.keys.add(event.key);
        }
        if (event.type == 'keyup' && this.keys.has(event.key)) {
            this.keys.delete(event.key);
        }
    }
    mouseMoveHandler(event, canvas) {
        let rect = canvas.getBoundingClientRect();
        this.mouse.x = Math.floor((event.clientX - rect.left) / (rect.right - rect.left) * canvas.width);
        this.mouse.y = Math.floor((event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height);
    }
    mouseButtonHandler(event) {
        if (event.type == 'mousedown') {
            if (event.button == 0)
                this.mouse.lmb = true;
            if (event.button == 2)
                this.mouse.rmb = true;
        }
        if (event.type == 'mouseup') {
            if (event.button == 0)
                this.mouse.lmb = false;
            if (event.button == 0)
                this.mouse.lmb = false;
        }
    }
}
