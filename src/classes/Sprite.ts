import { Position, SpriteAnimationProps, SpriteProps } from "../interfaces/interfaces";

export class Sprite {
    protected position: Position;
    protected width: number;
    protected height: number;
    protected image?: HTMLImageElement;
    protected animations?: [SpriteAnimationProps];

    constructor(props: SpriteProps) {
        this.position = props.position;
        this.width = props.width;
        this.height = props.height;
        if (props.imageSrc) {
            this.image = new Image();
            this.image.src = props.imageSrc;            
        }
        this.animations = props.animations ? props.animations : undefined;
    }

    switchSprite(name: string): void {
        console.log("switchPrite to:", name);
    }

    setPosition(position: Position): void {
        this.position = position;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    draw(context: CanvasRenderingContext2D) {
        if (this.image) {
            context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        } else {
            context.fillStyle = '#ff000081';
            context.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}