import { Dimensions, Position, SpriteAnimationProps, SpriteProps } from "../interfaces/interfaces";

export class Sprite {
    protected position: Position;
    protected dimensions: Dimensions;
    protected image?: HTMLImageElement;
    protected animations?: [SpriteAnimationProps];
    protected scale: number = window.innerHeight / 360;

    constructor(props: SpriteProps) {
        this.position = props.position;
        this.dimensions = props.dimensions;
        if (props.imageSrc) {
            this.image = new Image();
            this.image.src = props.imageSrc;            
        }
        this.animations = props.animations ? props.animations : undefined;
    }

    switchSprite(name: string): void {
        console.log("switchPrite to:", name);
    }

    draw(context: CanvasRenderingContext2D) {
        const scaledDimensions = this.ScaleDimensions(this.dimensions);
        const scaledPosition = this.ScalePosition(this.position);
        if (this.image) {
            context.drawImage(this.image, scaledPosition.x, scaledPosition.y, scaledDimensions.width, scaledDimensions.height);
        } else {
            context.fillStyle = '#ff000000';
            context.fillRect(scaledPosition.x, scaledPosition.y, scaledDimensions.width, scaledDimensions.height);
        }
    }

    private ScaleDimensions(originalDimensions: Dimensions): Dimensions {
        return {
            width: originalDimensions.width * this.scale,
            height: originalDimensions.height * this.scale,
        }
    }

    private ScalePosition(originalPosition: Position): Position {
        return {
            x: originalPosition.x * this.scale,
            y: originalPosition.y * this.scale,
        }
    }

    getScaledDimensions(): Dimensions {
        return this.ScaleDimensions(this.dimensions);
    }
}