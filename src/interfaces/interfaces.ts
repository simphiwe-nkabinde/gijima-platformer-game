import { Interactable } from "../classes/Interactable";
import { Token } from "../classes/Token";


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
    dimensions?: Dimensions;
}

export interface Dimensions {
    width: number;
    height: number;
}

export interface InteractablesObjects {
    obstacles?: Interactable[];
    tokens?: Token[];
}

export interface TextProps {
    text?: string;  
    position?: Position;
    fillStyle?: string;
}