import tokenAnimations from '../gameObjects/spriteAnimations/token.animations';
import { InteractableProps } from '../interfaces/interfaces';
import { Interactable } from "./Interactable";

export class Token extends Interactable {

    private points: number;

    constructor(props: InteractableProps, points: number) {
        super(props);
        this.points = points;
        this.sprite?.setAnimations(tokenAnimations);
    }

    getPoints(): number {
        return this.points;
    }

    destroy() {
        this.sprite =  undefined;  
        this.points = 0;     
    }
}