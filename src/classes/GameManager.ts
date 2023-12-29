import ground from "../gameObjects/collisionBlocks/ground";
import { CollisionBlock } from "./CollisionBlock";
import { Player } from "./Player";
import { Sprite } from "./Sprite";
import { Token } from "./Token";

export class GameManager {

    private player: Player;
    private collisionBlocks: CollisionBlock[];
    private tokens?: [Token];
    private context: CanvasRenderingContext2D;
    private background: Sprite;
    private CONTROLS = {
        JUMP: {
            pressed: false
        },
        RIGHT: {
            pressed: false
        },
        LEFT: {
            pressed: false
        }
    }

    constructor() {
        this.player = new Player({
            position: { x: 0, y: 30 },
            dimensions: { width: 50, height: 50 },
            imageSrc: "/idle.gif"
        }, ground);
        this.background = new Sprite({
            position: { x: 0, y: 0 },
            imageSrc: "/background-sprite.png",
            dimensions: { width: 1920, height: 360 }
        })
        const canvas = document.querySelector('canvas')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.context = canvas!.getContext('2d')!;

        this.collisionBlocks = ground;
    }
    start(): void {
        //show game company title
        const gameCompanyTitleContainer = document.getElementById('game-company-title-container');
        gameCompanyTitleContainer?.style.setProperty('display', 'flex');
        setTimeout(() => {
            gameCompanyTitleContainer?.style.setProperty('display', 'none');

            //show game title
            const gameTitleScreen = document.getElementById('game-title-screen');
            gameTitleScreen?.style.setProperty('display', 'flex');
            setTimeout(() => {
                gameTitleScreen?.style.setProperty('display', 'none');

                //show main menu screen
                const mainMenuScreen = document.getElementById('main-menu-screen');
                mainMenuScreen?.style.setProperty('display', 'block');
            }, 3000);
        }, 3000);
    }

    play(): void {
        const canvas = document.querySelector('canvas')!;
        canvas.style.setProperty('display', 'block');
        this.animate();
        this.setupControls();
        //hide main menu screen
        const mainMenuScreen = document.getElementById('main-menu-screen');
        mainMenuScreen?.style.setProperty('display', 'none');
    }

    setupControls() {
        window.addEventListener('keydown', event => {
            switch (event.key) {
                case 'ArrowUp':
                    this.CONTROLS.JUMP.pressed = true
                    break;
                case 'ArrowRight':
                    this.CONTROLS.RIGHT.pressed = true
                    break;
                case 'ArrowLeft':
                    this.CONTROLS.LEFT.pressed = true
                    break;
                default:
                    break;
            }
        })
        window.addEventListener('keyup', event => {
            switch (event.key) {
                case 'ArrowUp':
                    this.CONTROLS.JUMP.pressed = false
                    break;
                case 'ArrowRight':
                    this.CONTROLS.RIGHT.pressed = false
                    break;
                case 'ArrowLeft':
                    this.CONTROLS.LEFT.pressed = false
                    break;
                default:
                    break;
            }
        })
    }

    animate = () => {
        window.requestAnimationFrame(this.animate);
        this.context.fillStyle = ""
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        this.context.save();

        this.context.translate(0, 0);
        this.background.draw(this.context);
        this.collisionBlocks.forEach(block => {
            block.update(this.context)
        });
        this.player.update(this.context);
        this.context.restore();

        //controls
        if (this.CONTROLS.JUMP.pressed) this.player.jump();
        if (this.CONTROLS.LEFT.pressed) this.player.moveBackward()
        else this.player.stop()
        if (this.CONTROLS.RIGHT.pressed) this.player.moveForward()
        else this.player.stop()
    }

    showScoreBoard(): void {

    }

    toggleSound(): void {

    }

    pauseGame(): void {

    }

    showPauseMenu(): void {

    }
}