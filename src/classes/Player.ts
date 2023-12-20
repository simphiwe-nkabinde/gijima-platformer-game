import { InteractableOptions, Position } from "../interfaces/utilities";
import { Interactable } from "./Interactable";

export class Player extends Interactable {

    private acceleration: Position = { x: 0, y: 0 };
    private velocity: Position = { x: 0, y: 0 };
    private maxVelocity: Position = { x: 10, y: 10 };
    private healthScore: number = 100;

    constructor(options: InteractableOptions,) {
        super(options);
    }

    draw(): void {

    }

    jump(): void {

    }

    stop(): void {

    }
    moveForward(): void {

    }
    moveBackward(): void {

    }
    takeDamage(amount: number): void {

    }
}