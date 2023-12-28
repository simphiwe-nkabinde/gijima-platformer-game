import { InteractableProps } from "../interfaces/interfaces";
import { Interactable } from "./Interactable";

export class CollisionBlock extends Interactable {
    constructor(props: InteractableProps) {
        super(props)
    }
    
    update(context: CanvasRenderingContext2D): void {
        this.sprite?.draw(context);
    }
}