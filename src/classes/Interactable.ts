import { InteractableProps } from '../interfaces/interfaces';
export abstract class Interactable {
    protected position: any;
    protected width: number;
    protected height: number;
    protected image: HTMLImageElement;


    constructor(props: InteractableProps) {
        this.position = props.position;
        this.width = props.width;
        this.height = props.height;
        this.image = new Image();
        this.image.src = props.imageSrc;
    }

    abstract draw(context: CanvasRenderingContext2D): void
}