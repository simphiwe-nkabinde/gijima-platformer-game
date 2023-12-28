

export interface InteractableProps {
    position: any;
    width: number;
    height: number;
    imageSrc: string;
}

export interface Position {
    x: number;
    y: number;
}

export interface SpriteAnimationProps {
    name: string;
    imageSrc: string;
    frameRate: number;
    frameBuffer: number;
}

export interface SpriteProps {
    position: any;
    width: number;
    height: number;
    imageSrc: string;
    animations: [SpriteAnimationProps];
}