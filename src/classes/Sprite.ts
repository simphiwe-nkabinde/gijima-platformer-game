import { Dimensions, Position, SpriteAnimationProps, SpriteProps } from "../interfaces/interfaces";

export class Sprite {
    private position: Position;
    private dimensions: Dimensions;
    private image?: HTMLImageElement;
    private animations?: any = {};
    private activeSpriteName: string = 'idleForward';
    private currentFrame: number = 0;
    private elapsedFrames: number = 0;
    protected scale: number = window.innerHeight / 360;
    protected isActiveImageLoaded: boolean = false;

    constructor(props: SpriteProps) {
        this.position = props.position;
        this.dimensions = props.dimensions;
    };

    switchSprite(name: string): void {
        this.activeSpriteName = name;
    }

    draw(context: CanvasRenderingContext2D) {
        const scaledDimensions = this.getScaledDimensions();
        const scaledPosition = this.getScaledPosition();
        if (this.image) {
            context.drawImage(
                this.image,
                scaledPosition.x,
                scaledPosition.y,
                scaledDimensions.width,
                scaledDimensions.height
            );
        } else if (this.animations && Object.keys(this.animations).length) {
            // render animations
            const activeSprite = this.animations[this.activeSpriteName];
            const frameWidth = activeSprite.image.width / activeSprite.frameRate;
            const frameHeight = activeSprite.image.height;

            context.drawImage(
                activeSprite.image,
                this.currentFrame * frameWidth,
                0,
                frameWidth,
                frameHeight,
                scaledPosition.x,
                scaledPosition.y,
                scaledDimensions.width,
                scaledDimensions.height
            )
            this.updateFrames(activeSprite)

        } else {
            context.fillStyle = '#ff000000';
            context.fillRect(
                scaledPosition.x,
                scaledPosition.y,
                scaledDimensions.width,
                scaledDimensions.height
            );
        }
    }
    updateFrames(animation: any) {
        this.elapsedFrames++;
        if (this.elapsedFrames % animation.frameBuffer == 0) {
            if (this.currentFrame < animation.frameRate - 1) this.currentFrame++
            else this.currentFrame = 0
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
            this.image.onload = () => {
                this.isActiveImageLoaded = true;
            }
        }
    }

    setAnimations(props: SpriteAnimationProps[]): void {
        if (props?.length) {
            props?.forEach(item => {
                this.animations[item.name] = {
                    frameRate: item.frameRate,
                    frameBuffer: item.frameBuffer,
                    isLoaded: false
                }
                const newImage = new Image();
                newImage.src = item.imageSrc;
                newImage.onload = () => {
                    this.animations[item.name].isLoaded = true
                }

                this.animations[item.name].image = newImage
            })
        }
    }
}