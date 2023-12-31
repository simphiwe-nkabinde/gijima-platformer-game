import playerAnimations from "../gameObjects/spriteAnimations/player.animations";
import { InteractableProps, Position } from "../interfaces/interfaces";
import { CollisionBlock } from "./CollisionBlock";
import { Interactable } from "./Interactable";

export class Player extends Interactable {

    private acceleration: Position = { x: 0, y: 0 };
    private velocity: Position = { x: 0, y: 0 };
    private maxVelocity: Position = { x: 10, y: 10 };
    private healthScore: number = 100;
    private readonly gravity = 0.5;
    private collisionBlocks: CollisionBlock[];
    private lastDirection: number = 1;

    constructor(props: InteractableProps, collisionBlocks: CollisionBlock[]) {
        super(props);
        this.collisionBlocks = collisionBlocks;
        this.sprite?.setAnimations(playerAnimations);
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

    getVelocity(): Position {
        return this.velocity
    }
    moveHorizontally() {
        this.position.x += this.velocity.x;
    }

    jump(): void {
        if (this.velocity.x >= 0) {
            this.sprite?.switchSprite('jumpForward');
        } else {
            this.sprite?.switchSprite('jumpBackward');
        }

        if (this.velocity.y == 0) {
            this.velocity.y = -10;
        }
    }

    stop(): void {
        if (this.velocity.y == 0) {
            if (this.velocity.x > 0) this.lastDirection = 1
            else if (this.velocity.x < 0) this.lastDirection = -1

            if (this.lastDirection > 0) {
                this.sprite?.switchSprite('idleForward');
            } else {
                this.sprite?.switchSprite('idleBackward');
            }
        }

        this.velocity.x = 0;
    }
    moveForward(): void {
        if (this.velocity.y == 0) this.sprite?.switchSprite('runForward');
        this.velocity.x = 5;
        this.moveHorizontally();
    }
    moveBackward(): void {
        if (this.velocity.y == 0) this.sprite?.switchSprite('runBackward');
        this.velocity.x = -5;
        this.moveHorizontally();
    }
    takeDamage(amount: number): void {

    }
}