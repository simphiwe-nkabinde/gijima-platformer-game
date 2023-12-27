import { InteractableOptions } from './../interfaces/utilities';
export abstract class Interactable {
    protected position: any;
    protected width: number;
    protected height: number;
    protected image: HTMLImageElement;


    constructor(options: InteractableOptions) {
        this.position = options.position;
        this.width = options.width;
        this.height = options.height;
        this.image = new Image();
        this.image.src = options.imageSrc;
    }

    abstract draw(context: CanvasRenderingContext2D): void
}