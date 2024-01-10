import obstacleCourse1 from "../gameObjects/obstacles/obstacleCourse1";
import tokens from "../gameObjects/tokens/tokens";
import { Interactable } from "./Interactable";
import { Player } from "./Player";
import { Sprite } from "./Sprite";
import { Token } from "./Token";

export class GameManager {

    private player: Player;
    private obstacles: Interactable[];
    private tokens: Token[];
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
    sceneTranslationX: number = 0;

    constructor() {
        this.player = new Player({
            position: { x: 0, y: 30 },
            dimensions: { width: 45, height: 75 }
        }, {
            obstacles: obstacleCourse1,
            tokens: tokens
        });
        this.background = new Sprite({
            position: { x: 0, y: 0 },
            imageSrc: "/background-sprite.png",
            dimensions: { width: 1920, height: 360 }
        })
        this.background.setImage("/background-sprite.png");
        const canvas = document.querySelector('canvas')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.context = canvas!.getContext('2d')!;

        this.obstacles = obstacleCourse1;
        this.tokens = tokens;
    }

    private panHorizontally() {
        const playerXPos = this.player.getPosition().x
        const playerVelocity = this.player.getVelocity();

        if (playerVelocity.x == 0) return;

        //space between player and left side of viewbox
        const playerXToInnerwidthDistance = window.innerWidth - playerXPos - this.sceneTranslationX;

        if (playerXToInnerwidthDistance < (window.innerWidth / 2)) {
            // to right: decrement
            if (this.background.getScaledDimensions().width + this.sceneTranslationX > window.innerWidth)
                this.sceneTranslationX -= playerVelocity.x;
        } else if (playerXToInnerwidthDistance > (window.innerWidth / 2) && this.sceneTranslationX < 0) {
            // to left: incrementx
            this.sceneTranslationX -= playerVelocity.x;
        }
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
        const controlPanel: HTMLDivElement = document.querySelector('#game-controls-wrapper')!;
        canvas.style.setProperty('display', 'block');
        controlPanel.style.setProperty('display', 'flex')
        this.animate();
        this.setupControls();
        //hide main menu screen
        const mainMenuScreen = document.getElementById('main-menu-screen');
        mainMenuScreen?.style.setProperty('display', 'none');
    }

    setupControls() {
        document.querySelector('#control-run-right')?.addEventListener('touchstart', e => {
            this.CONTROLS.RIGHT.pressed = true
            this.CONTROLS.LEFT.pressed = false
        })
        document.querySelector('#control-run-right')?.addEventListener('touchend', e => {
            this.CONTROLS.RIGHT.pressed = false
        })

        document.querySelector('#control-run-left')?.addEventListener('touchstart', e => {
            this.CONTROLS.LEFT.pressed = true
            this.CONTROLS.RIGHT.pressed = false
        })
        document.querySelector('#control-run-left')?.addEventListener('touchend', e => {
            this.CONTROLS.LEFT.pressed = false
        })

        document.querySelector('canvas')?.addEventListener('touchstart', e => {
            this.CONTROLS.JUMP.pressed = true
        })
        document.querySelector('canvas')?.addEventListener('touchend', e => {
            this.CONTROLS.JUMP.pressed = false
        })

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

        this.context.translate(this.sceneTranslationX, 0);
        this.background.draw(this.context);
        this.obstacles.forEach(block => {
            block.update(this.context)
        });
        this.tokens.forEach(t => {
            t.update(this.context)
        })
        this.player.update(this.context);
        this.context.restore();
        this.panHorizontally()
        //controls
        if (this.CONTROLS.JUMP.pressed) this.player.jump();

        if (this.CONTROLS.LEFT.pressed) this.player.moveBackward()
        else if (this.CONTROLS.RIGHT.pressed) this.player.moveForward()
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