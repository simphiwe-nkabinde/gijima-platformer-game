import { PlayerStatusPanel } from './PlayerStatusPanel';
import { Interactable } from "./Interactable";
import { Player } from "./Player";
import { Sound } from "./Sound";
import { Sprite } from "./Sprite";
import { Token } from "./Token";
import getGroundSpites from '../utilities/getGroundSpites';
import getLedgeSprites from '../utilities/getLedgeSprites';
import getTokenSprites from '../utilities/getTokenSprites';
import getBackgroundSprites from '../utilities/getBackgroundSprites';

export class GameManager {

    private player: Player;
    private obstacles: Interactable[];
    private tokens: Token[];
    private context: CanvasRenderingContext2D;
    private playerStatusPanel: PlayerStatusPanel;
    private parallaxBackground: Sprite[][]
    private Sounds: any = {};
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
        this.obstacles = [...getGroundSpites(), ...getLedgeSprites()];

        this.tokens = getTokenSprites();

        this.player = new Player({
            position: { x: 0, y: 30 },
            dimensions: { width: 35, height: 60 }
        }, {
            obstacles: this.obstacles,
            tokens: this.tokens
        });

        this.parallaxBackground = getBackgroundSprites();
        const canvas = document.querySelector('canvas')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.context = canvas!.getContext('2d')!;


        //Sounds
        this.Sounds.mainMenu = new Sound('bg-sound-1.mp3');
        this.Sounds.gameplay = new Sound('bg-sound-2.mp3');

        this.playerStatusPanel = new PlayerStatusPanel(this.context)
    }

    private panHorizontally() {
        const playerXPos = this.player.getPosition().x
        const playerVelocity = this.player.getVelocity();

        if (playerVelocity.x == 0) return;

        //space between player and left side of viewbox
        const playerXToInnerwidthDistance = window.innerWidth - playerXPos - this.sceneTranslationX;

        if (playerXToInnerwidthDistance < (window.innerWidth / 2)) {
            // to right: decrement
            if (this.obstacles[this.obstacles.length - 1].getPosition().x + this.sceneTranslationX > window.innerWidth)
                this.sceneTranslationX -= playerVelocity.x;
        } else if (playerXToInnerwidthDistance > (window.innerWidth / 2) && this.sceneTranslationX < 0) {
            // to left: incrementx
            this.sceneTranslationX -= playerVelocity.x;
        }
    }

    start(): void {
        //show game company title
        const gameCompanyTitleContainer = document.getElementById('game-company-title-container');
        // gameCompanyTitleContainer?.style.setProperty('display', 'flex');

        //show main menu screen
        const mainMenuScreen = document.getElementById('main-menu-screen');
        mainMenuScreen?.style.setProperty('display', 'block');

        document.body.onclick = () => {
            document.body.requestFullscreen().then(val => console.log(val));
            document.querySelector('#intro-modal-overlay')?.remove();

            //play background music
            this.Sounds.mainMenu.play();
        }
        return
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

        //play background music
        this.Sounds.mainMenu.stop();
        this.Sounds.gameplay.play();

    }

    setupControls() {
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
        this.parallaxBackground.forEach((level, levelIndex) => {
            level.forEach(item =>
                item.draw(this.context, this.sceneTranslationX * (levelIndex / 20))
            )
        });
        this.obstacles.forEach(block => {
            block.update(this.context)
        });
        this.tokens.forEach(t => {
            t.update(this.context)
        })
        this.player.update(this.context);
        this.context.restore();
        this.panHorizontally();

        this.playerStatusPanel.update({
            tokens: this.player.getTokens(),
            distance: Math.round(this.sceneTranslationX / -40),
            lives: this.player.getLives()
        })

        this.player.moveForward()

        //controls
        if (this.CONTROLS.JUMP.pressed) this.player.jump();

        // if (this.CONTROLS.LEFT.pressed) this.player.moveBackward()
        // else if (this.CONTROLS.RIGHT.pressed) this.player.moveForward()
        // else this.player.stop()
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