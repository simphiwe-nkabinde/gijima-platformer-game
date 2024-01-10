import { Dimensions, InteractableProps, Position } from '../interfaces/interfaces';
import { Sprite } from './Sprite';

export class Interactable {
    protected position: any;
    protected dimensions: Dimensions;
    protected sprite?: Sprite;

    constructor(props: InteractableProps) {
        this.position = props.position;
        this.dimensions = props.dimensions;
        this.sprite = new Sprite(props)
    }

    update(context: CanvasRenderingContext2D): void {
        this.sprite?.draw(context);
    }

    protected isColliding(object: Interactable): boolean {
        return (
            this.position.y + this.dimensions.height >= object.position.y &&
            this.position.y <= object.position.y + object.dimensions.height &&
            this.position.x <= object.position.x + object.dimensions.width &&
            this.position.x + this.dimensions.width >= object.position.x
        )
    }

    getPosition(): Position {
        return this.position
    }

    getDimensions(): Dimensions {
        return this.dimensions;
    }
}