import { Dimensions, Position, SpriteAnimationProps, SpriteProps } from "../interfaces/interfaces";

export class Sprite {
    private position: Position;
    private dimensions: Dimensions;
    private image?: HTMLImageElement;
    private animations?: any = {};
    private activeSprite: string = '';
    protected scale: number = window.innerHeight / 360;

    constructor(props: SpriteProps) {
        this.position = props.position;
        this.dimensions = props.dimensions;
    };

    switchSprite(name: string): void {
        this.activeSprite = name;
    }

    draw(context: CanvasRenderingContext2D) {
        const scaledDimensions = this.getScaledDimensions();
        const scaledPosition = this.getScaledPosition();
        if (this.image) {
            context.drawImage(this.image, scaledPosition.x, scaledPosition.y, scaledDimensions.width, scaledDimensions.height);
        } else if (Object.keys(this.animations).length) {
            // render animations
        } else {
            context.fillStyle = '#ff000000';
            context.fillRect(scaledPosition.x, scaledPosition.y, scaledDimensions.width, scaledDimensions.height);
        }
    }

    getScaledDimensions(): Dimensions {
        return {
            width: this.dimensions.width * this.scale,
            height: this.dimensions.height * this.scale,
        }
    }

    getScaledPosition(): Position {
        return {
            x: this.position.x * this.scale,
            y: this.position.y * this.scale,
        }
    }
    
    setImage(imageSrc: string) {
        if (imageSrc?.length) {
            this.image = new Image();
            this.image.src = imageSrc;
        }
    }

    setAnimations(props: SpriteAnimationProps[]): void {
        if (props?.length) {
            this.animations = props?.forEach(item => {
                const newImage = new Image();
                newImage.src = item.imageSrc;
                this.animations[item.name] = {
                    image: newImage,
                    frameRate: item.frameRate,
                    frameBuffer: item.frameBuffer
                }
            })
        }
    }
}