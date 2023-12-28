import { InteractableProps } from '../interfaces/interfaces';
import { Sprite } from './Sprite';

export abstract class Interactable {
    protected position: any;
    protected width: number;
    protected height: number;
    protected sprite?: Sprite;

    constructor(props: InteractableProps) {
        this.position = props.position;
        this.width = props.width;
        this.height = props.height;
        this.sprite = new Sprite(props)
    }

    abstract update(context: CanvasRenderingContext2D): void
}