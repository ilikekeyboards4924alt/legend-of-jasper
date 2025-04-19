import { TexturedRect } from "./components/texturedrect.js";
import { Controller } from "./controller.js";
import { Player } from "./gameplay/player.js";
import { Renderer } from "./renderer.js";
import { logoImage, startButtonAnimation, titleImage, walkCycleAnimation } from "./textures.js";
import { StartButton } from "./ui/startbutton.js";

let renderer: Renderer = new Renderer();
let controller: Controller = new Controller();

renderer.canvas.width = 960;
renderer.canvas.height = 540;

let logo: TexturedRect = new TexturedRect(0, 0, 960, 540, logoImage);
let titleCard: TexturedRect = new TexturedRect(0, 0, 960, 540, titleImage);
let button: StartButton = new StartButton(renderer.canvas.width/2 - 128/2, 0, 128, 64, startButtonAnimation);
let player: Player = new Player(0, 0, 96*2/3, 243*2/3, walkCycleAnimation);

document.addEventListener('keydown', event => controller.keyHandler(event));
document.addEventListener('keyup', event => controller.keyHandler(event));
document.addEventListener('mousemove', event => controller.mouseMoveHandler(event, renderer.canvas));
document.addEventListener('mousedown', event => controller.mouseButtonHandler(event));
document.addEventListener('mouseup', event => controller.mouseButtonHandler(event));

export { renderer, controller, logo, titleCard, button, player };