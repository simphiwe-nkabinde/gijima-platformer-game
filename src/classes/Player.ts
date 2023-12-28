import { InteractableProps, Position } from "../interfaces/interfaces";
import { Interactable } from "./Interactable";

export class Player extends Interactable {

    private acceleration: Position = { x: 0, y: 0 };
    private velocity: Position = { x: 0, y: 0 };
    private maxVelocity: Position = { x: 10, y: 10 };
    private healthScore: number = 100;
    private readonly gravity = 0.5;

    constructor(props: InteractableProps) {
        super(props);
    }

    update(context: CanvasRenderingContext2D): void {
        this.sprite?.draw(context);
        this.addGravity();
    }

    addGravity() {
        if (this.position.y <= (window.innerHeight - 100)) {
            this.position.y += this.velocity.y;
            this.velocity.y += this.gravity;
        }

    }
    moveHorizontally() {
        this.position.x += this.velocity.x;
    }

    jump(): void {
        this.velocity.y = -15;
    }

    stop(): void {

    }
    moveForward(): void {
        this.velocity.x = 5;
        this.moveHorizontally();
    }
    moveBackward(): void {
        this.velocity.x = -5;
        this.moveHorizontally();
    }
    takeDamage(amount: number): void {

    }
}