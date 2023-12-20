import { InteractableOptions } from './../interfaces/utilities';
export abstract class Interactable {
    protected position: any;
    protected width: number;
    protected height: number;
    protected imageSrc: string;


    constructor(options: InteractableOptions) {
        this.position = options.position;
        this.width = options.width;
        this.height = options.height;
        this.imageSrc = options.imageSrc;
    }

    abstract draw(): void
}