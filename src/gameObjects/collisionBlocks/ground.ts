import { CollisionBlock } from "../../classes/CollisionBlock";

export default [
    new CollisionBlock({
        position: { x: 0, y: window.innerHeight - 90 },
        dimensions: {
            width: window.innerWidth / 3.3,
            height: 80
        },
        imageSrc: ''
    }),
    new CollisionBlock({
        position: { x: 225, y: window.innerHeight - 45 },
        dimensions: {
            width: window.innerWidth / 1.7,
            height: 40
        },
        imageSrc: ''
    }),
    new CollisionBlock({
        position: { x: 665, y: window.innerHeight - 100 },
        dimensions: {
            width: window.innerWidth / 8,
            height: 90
        },
        imageSrc: ''
    }),
    new CollisionBlock({
        position: { x: 760, y: window.innerHeight - 45 },
        dimensions: {
            width: window.innerWidth / 1.17,
            height: 40
        },
        imageSrc: ''
    }),
    new CollisionBlock({
        position: { x: 810, y: window.innerHeight - 171 },
        dimensions: {
            width: window.innerWidth / 6,
            height: 30
        },
        imageSrc: ''
    }),
    new CollisionBlock({
        position: { x: 1035, y: window.innerHeight - 120 },
        dimensions: {
            width: window.innerWidth / 6,
            height: 30
        },
        imageSrc: ''
    }),
    new CollisionBlock({
        position: { x: 1385, y: window.innerHeight - 110 },
        dimensions: {
            width: window.innerWidth / 10,
            height: 100
        },
        imageSrc: ''
    }),
    new CollisionBlock({
        position: { x: 1460, y: window.innerHeight - 45 },
        dimensions: {
            width: window.innerWidth / 1.61,
            height: 40
        },
        imageSrc: ''
    }),
]