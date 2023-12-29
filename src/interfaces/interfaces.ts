

export interface InteractableProps {
    position: any;
    dimensions: Dimensions;
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
    dimensions: Dimensions;
    imageSrc?: string;
    animations?: [SpriteAnimationProps];
}

export interface Dimensions {
    width: number;
    height: number;
}