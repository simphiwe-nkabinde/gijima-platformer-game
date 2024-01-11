export class Sound {
    private audio: HTMLAudioElement;

    constructor(src: string) {
        this.audio = document.createElement('audio');
        this.audio.src = src;
        document.body.appendChild(this.audio);
    }

    play() {
        this.audio.play();
    }
    stop() {
        this.audio.pause();
    }

}