import { Interactable } from "../classes/Interactable"

export default (): Interactable[] => {

    const groundSprites = []

    for (let i = 0; i < 1000; i++) {
        const ground = new Interactable({
            position: { x: 45 * i, y: window.innerHeight - 45 },
            dimensions: { width: 223, height: 45 },
            spriteImageSrc: '/ground-sprite.png'
        })
        groundSprites.push(ground)
    }

    return groundSprites;
}