import { Sprite } from "./Sprite";

export class PlayerStatusPanel {
    private context: CanvasRenderingContext2D
    private token: { icon?: Sprite, text?: Sprite } = {};
    private lives: { icon?: Sprite, text?: Sprite } = {};
    private distance: { icon?: Sprite, text?: Sprite } = {};

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;

        //tokens sprites
        this.token.icon = new Sprite({
            position: { x: 10, y: 50 },
            dimensions: { width: 25, height: 25 },
        })
        this.token.icon.setImage('/token.png');
        this.token.text = new Sprite({
            position: { x: 40, y: 70 },
        })
        this.token.text.setText({
            text: '0',
            fillStyle: '#f9da2f'
        })

        //lives sprites
        this.lives.icon = new Sprite({
            position: { x: 10, y: 85 },
            dimensions: { width: 25, height: 22 },
        })
        this.lives.icon.setImage('/heart.png')
        this.lives.text = new Sprite({
            position: { x: 40, y: 105 },
        })
        this.lives.text.setText({
            text: '0',
            fillStyle: '#1d1e1e'
        })

        //distance sprites
        this.distance.text = new Sprite({
            position: { x: 40, y: 35 },
        })
        this.lives.text.setText({
            text: '0',
            fillStyle: '#1d1e1e'
        })
    }

    update(props: { tokens: number, distance: number, lives: number }) {
        this.context.font = "26px Arial";

        this.token.icon!.draw(this.context);
        this.token.text?.setText({ text: props.tokens.toString() })
        this.token.text!.draw(this.context);

        this.lives.icon!.draw(this.context);
        this.lives.text?.setText({ text: props.lives.toString() })
        this.lives.text!.draw(this.context);

        this.distance.text?.setText({ text: props.distance.toString() })
        this.distance.text!.draw(this.context);
    }
}