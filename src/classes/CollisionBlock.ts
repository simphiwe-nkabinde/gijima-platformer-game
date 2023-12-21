import { InteractableOptions } from "../interfaces/utilities";
import { Interactable } from "./Interactable";

export class CollisionBlock extends Interactable {
    constructor(options: InteractableOptions) {
        super(options)
    }
    
    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}