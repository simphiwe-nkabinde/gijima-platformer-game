import { Interactable } from "../classes/Interactable"

function hCalc(perc: number) {
    return window.innerHeight * (perc / 100)
}

export default (): Interactable[] => {

    const ledgeSprites = []

    const heights = [hCalc(20), hCalc(40), hCalc(60), hCalc(70), hCalc(20), hCalc(40)]

    for (let i = 0; i < 1000; i++) {

        let randomHeight = Math.random() * (window.innerHeight - 100 - 100) + 100

        let randomSprite = Math.round(Math.random() * (6 - 1) + 1);


        const ledge = new Interactable({
            position: { x: 200 * i, y: heights[randomSprite] },
            dimensions: { width: 35 * randomSprite, height: 34 },
            spriteImageSrc: `/ledge-${randomSprite}.png`
        })
        ledgeSprites.push(ledge)
    }

    return ledgeSprites;
}