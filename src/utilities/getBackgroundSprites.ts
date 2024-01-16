import { Sprite } from "../classes/Sprite"

export default (): Sprite[][] => {

    const bgSprites = []
    const plx1Arr = [];
    const plx2Arr = [];
    const plx3Arr = [];
    const plx4Arr = [];
    const plx5Arr = [];

    for (let i = 0; i < 1000; i++) {
        const plx1 = new Sprite({
            position: { x: 384 * i, y: 0 },
            dimensions: { width: window.innerHeight * (16 / 9), height: window.innerHeight },
        })
        plx1.setImage('/plx-1.png')
        plx1Arr.push(plx1)

        const plx2 = new Sprite({
            position: { x: 384 * i, y: 0 },
            dimensions: { width: window.innerHeight * (16 / 9), height: window.innerHeight },
        })
        plx2.setImage('/plx-2.png')
        plx2Arr.push(plx2)

        const plx3 = new Sprite({
            position: { x: 384 * i, y: 0 },
            dimensions: { width: window.innerHeight * (16 / 9), height: window.innerHeight },
        })
        plx3Arr.push(plx3)

        plx3.setImage('/plx-3.png')
        const plx4 = new Sprite({
            position: { x: 384 * i, y: 0 },
            dimensions: { width: window.innerHeight * (16 / 9), height: window.innerHeight },
        })
        plx4.setImage('/plx-4.png')
        plx4Arr.push(plx4)

        const plx5 = new Sprite({
            position: { x: 384 * i, y: 0 },
            dimensions: { width: window.innerHeight * (16 / 9), height: window.innerHeight },
        })
        plx5.setImage('/plx-5.png')
        plx5Arr.push(plx5)

    }

    return [plx1Arr, plx2Arr, plx3Arr, plx4Arr, plx5Arr];
}