import { InteractableOptions } from './../interfaces/utilities';
import { Interactable } from "./Interactable";

export class Token extends Interactable {

    private points: number;

    constructor(options: InteractableOptions, points: number) {
        super(options);
        this.points = points;
    }

    draw(): void {

    }

    getPoints(): number {
        return 0;
    }
}