import { InteractableOptions } from './../interfaces/utilities';
import { Interactable } from "./Interactable";

export class Token extends Interactable {

    private points: number;

    constructor(options: InteractableOptions, points: number) {
        super(options);
        this.points = points;
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = 'yellow';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    getPoints(): number {
        return 0;
    }
}