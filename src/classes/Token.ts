import { InteractableProps } from '../interfaces/interfaces';
import { Interactable } from "./Interactable";

export class Token extends Interactable {

    private points: number;

    constructor(props: InteractableProps, points: number) {
        super(props);
        this.points = points;
    }

    update(context: CanvasRenderingContext2D): void {
        context.fillStyle = 'yellow';
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }

    getPoints(): number {
        return 0;
    }
}