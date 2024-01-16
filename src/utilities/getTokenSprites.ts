import { Token } from "../classes/Token"

export default (): Token[] => {

    const tokenSprites = []
    

    for (let i = 0; i < 1000; i++) {

        let randomHeight = Math.random() * (window.innerHeight - 100 - 100) + 100

        const token = new Token({
            position: { x: 25 * i, y: randomHeight },
            dimensions: { width: 25, height: 25 },
        })
        tokenSprites.push(token)
    }

    return tokenSprites;
}