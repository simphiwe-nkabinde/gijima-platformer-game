import { CollisionBlock } from "./CollisionBlock";
import { Player } from "./Player";
import { Token } from "./Token";

export class GameManager {

    private player?: Player;
    private collisionBlocks?: [CollisionBlock];
    private tokens?: [Token];

    constructor() {
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

    }

    showScoreBoard(): void {

    }

    toggleSound(): void {

    }

    pauseGame(): void {

    }

    showPauseMenu(): void {

    }

    setCollisionBlocks(blocks: [CollisionBlock]): void {
        this.collisionBlocks = blocks;
    }

    setPlayer(player: Player): void {
        this.player = player;
    }

    setTokens(tokens: [Token]): void {
        this.tokens = tokens;
    }




}