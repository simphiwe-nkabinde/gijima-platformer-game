import { InteractableOptions, Position } from "../interfaces/utilities";
import { Interactable } from "./Interactable";

export class Sprite extends Interactable {
    constructor(options: InteractableOptions) {
        super(options)
    }

    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}