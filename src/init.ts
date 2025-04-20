import { TexturedRect } from "./components/texturedrect.js";
import { Controller } from "./controller.js";
import { Camera } from "./gameplay/camera.js";
import { Decor } from "./gameplay/decor.js";
import { Player } from "./gameplay/player.js";
import { Renderer } from "./renderer.js";
import { logoImage, startButtonAnimation, titleImage, walkCycleAnimation, signDecorImage } from "./textures.js";
import { StartButton } from "./ui/startbutton.js";
import { random } from "./util.js";

let renderer: Renderer = new Renderer();
let controller: Controller = new Controller();

renderer.canvas.width = 960;
renderer.canvas.height = 540;

let camera: Camera = new Camera(renderer);

let logo: TexturedRect = new TexturedRect(0, 0, 960, 540, logoImage);
let titleCard: TexturedRect = new TexturedRect(0, 0, 960, 540, titleImage);
let button: StartButton = new StartButton(renderer.canvas.width - 128 - 40, 40, 128, 64, startButtonAnimation);
let player: Player = new Player(0, 0, 96*2/3, 243*2/3, walkCycleAnimation);

let decors: Decor[] = [];
for (let i = 0; i < 10; i++) {
    let decor: Decor = new Decor(random(-renderer.canvas.width, renderer.canvas.width*2), random(-renderer.canvas.height, renderer.canvas.height*2), 102, 105, signDecorImage);
    decors.push(decor);
}

document.addEventListener('keydown', event => controller.keyHandler(event));
document.addEventListener('keyup', event => controller.keyHandler(event));
document.addEventListener('mousemove', event => controller.mouseMoveHandler(event, renderer.canvas));
document.addEventListener('mousedown', event => controller.mouseButtonHandler(event));
document.addEventListener('mouseup', event => controller.mouseButtonHandler(event));

export { renderer, controller, camera, logo, titleCard, button, player, decors };