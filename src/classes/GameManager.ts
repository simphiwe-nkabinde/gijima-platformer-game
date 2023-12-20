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