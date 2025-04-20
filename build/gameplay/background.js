import { TexturedRect } from "../components/texturedrect.js";
import { backgroundImage } from "../core/textures.js";
export class Background {
    constructor(renderer) {
        this.rows = 3;
        this.columns = 3;
        this.sections = [];
        for (let y = 0; y < this.rows; y++) {
            this.sections.push([]);
            for (let x = 0; x < this.columns; x++) {
                let section = new TexturedRect(-renderer.canvas.width + renderer.canvas.width * x, -renderer.canvas.height + renderer.canvas.height * y, 960, 540, backgroundImage);
                this.sections[y].push(section);
            }
        }
    }
    update(rect) {
        this.sections.forEach(row => {
            row.forEach(section => {
                if (section.x - rect.x > section.w * (this.columns - Math.ceil(this.columns / 2))) {
                    section.x -= section.w * this.columns;
                }
                if (section.x - rect.x < -section.w * (this.columns - Math.floor(this.columns / 2))) {
                    section.x += section.w * this.columns;
                }
                if (section.y - rect.y > section.h * (this.rows - Math.ceil(this.rows / 2))) {
                    section.y -= section.h * this.rows;
                }
                if (section.y - rect.y < -section.h * (this.rows - Math.floor(this.rows / 2))) {
                    section.y += section.h * this.rows;
                }
            });
        });
    }
    draw(camera) {
        this.sections.forEach(row => {
            row.forEach(section => {
                section.draw(camera);
            });
        });
    }
}
