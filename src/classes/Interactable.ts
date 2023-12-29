import { Dimensions, InteractableProps } from '../interfaces/interfaces';
import { Sprite } from './Sprite';

export abstract class Interactable {
    protected position: any;
    protected dimensions: Dimensions;
    protected sprite?: Sprite;

    constructor(props: InteractableProps) {
        this.position = props.position;
        this.dimensions = props.dimensions;
        this.sprite = new Sprite(props)
    }

    abstract update(context: CanvasRenderingContext2D): void
}