import { InteractableProps } from "../interfaces/interfaces";
import { Interactable } from "./Interactable";

export class CollisionBlock extends Interactable {
    constructor(props: InteractableProps) {
        super(props)
    }
    
    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}