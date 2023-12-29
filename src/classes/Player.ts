import { InteractableProps, Position } from "../interfaces/interfaces";
import { CollisionBlock } from "./CollisionBlock";
import { Interactable } from "./Interactable";

export class Player extends Interactable {

    private acceleration: Position = { x: 0, y: 0 };
    private velocity: Position = { x: 0, y: 0 };
    private maxVelocity: Position = { x: 10, y: 10 };
    private healthScore: number = 100;
    private readonly gravity = 0.5;
    protected collisionBlocks: CollisionBlock[];

    constructor(props: InteractableProps, collisionBlocks: CollisionBlock[]) {
        super(props);
        this.collisionBlocks = collisionBlocks;
    }

    update(context: CanvasRenderingContext2D): void {
        this.sprite?.draw(context);
        this.reactToHorizontalCollisions();
        this.applyGravity();
        this.reactToVerticalCollisions();
    }

    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    }

    reactToVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            if (this.isColliding(collisionBlock)) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.getPosition().y - this.dimensions.height - 0.01;
                    break;
                }
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.getPosition().y + collisionBlock.getDimensions().height + 0.01;
                    break;
                }
            }
        }
    }
    reactToHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            if (this.isColliding(collisionBlock)) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionBlock.getPosition().x - this.dimensions.width - 0.01;
                    break
                }
                if (this.velocity.x < 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionBlock.getPosition().x + collisionBlock.getDimensions().width + 0.01;
                    break
                }
            }
        }
    }
    moveHorizontally() {
        this.position.x += this.velocity.x;
    }

    jump(): void {
        this.velocity.y = -10;
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