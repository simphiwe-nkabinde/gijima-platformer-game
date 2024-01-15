import playerAnimations from "../gameObjects/spriteAnimations/player.animations";
import { InteractableProps, InteractablesObjects, Position } from "../interfaces/interfaces";
import { Interactable } from "./Interactable";

export class Player extends Interactable {

    private acceleration: Position = { x: 0, y: 0 };
    private velocity: Position = { x: 0, y: 0 };
    private maxVelocity: Position = { x: 10, y: 10 };
    private lives: number = 1;
    private readonly gravity = 0.5;
    private interactableObjects: InteractablesObjects;
    private tokens: number = 0;
    private lastDirection: number = 1;
    private jumpCount: number = 0;

    constructor(props: InteractableProps, interactableObjects: InteractablesObjects) {
        super(props);
        this.interactableObjects = interactableObjects;
        this.sprite?.setAnimations(playerAnimations);
    }

    update(context: CanvasRenderingContext2D): void {
        this.sprite?.draw(context);
        this.reactToHorizontalCollisions();
        this.applyGravity();
        this.reactToVerticalCollisions();
        this.reactToTokens();
    }

    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    }

    reactToVerticalCollisions() {
        if (!this.interactableObjects.obstacles?.length) return;
        for (let i = 0; i < this.interactableObjects.obstacles.length; i++) {
            const obstacle = this.interactableObjects.obstacles[i];

            if (this.CollidesWith(obstacle)) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = obstacle.getPosition().y - this.dimensions.height - 0.01;
                    break;
                }
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = obstacle.getPosition().y + obstacle.getDimensions().height + 0.01;
                    break;
                }
            }
        }
    }
    reactToHorizontalCollisions() {
        if (!this.interactableObjects.obstacles?.length) return;
        for (let i = 0; i < this.interactableObjects.obstacles.length; i++) {
            const obstacle = this.interactableObjects.obstacles[i];

            if (this.CollidesWith(obstacle)) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0;
                    this.position.x = obstacle.getPosition().x - this.dimensions.width - 0.01;
                    break
                }
                if (this.velocity.x < 0) {
                    this.velocity.x = 0;
                    this.position.x = obstacle.getPosition().x + obstacle.getDimensions().width + 0.01;
                    break
                }
            }
        }
    }
    reactToTokens() {
        if (!this.interactableObjects.tokens?.length) return;
        for (let i = 0; i < this.interactableObjects.tokens.length; i++) {
            const token = this.interactableObjects.tokens[i];

            if (this.CollidesWith(token)) {
                this.tokens += token.getPoints();
                token.destroy();
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
    getTokens(): number {
        return this.tokens;
    }
    getLives() : number {
        return this.lives
    }
}