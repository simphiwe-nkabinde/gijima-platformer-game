import { InteractableProps } from '../interfaces/interfaces';
import { Interactable } from "./Interactable";

export class Token extends Interactable {

    private points: number;

    constructor(props: InteractableProps, points: number) {
        super(props);
        this.points = points;
    }

    update(context: CanvasRenderingContext2D): void {
        this.sprite?.draw(context);
    }

    getPoints(): number {
        return this.points;
    }
}