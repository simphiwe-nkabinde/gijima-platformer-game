

export interface InteractableProps {
    position: Position;
    dimensions: Dimensions;
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
    position: Position;
    dimensions: Dimensions;
    imageSrc?: string;
    animations?: SpriteAnimationProps[];
}

export interface Dimensions {
    width: number;
    height: number;
}