import { Graphics, Point } from 'pixi.js';
import { Tetris } from './Tetris';

export const FigureL = [
    [
        0b100,
        0b111,
    ], [
        0b11,
        0b10,
        0b10,
    ], [
        0b111,
        0b001,
    ], [
        0b01,
        0b01,
        0b11,
    ],
]
export const FigureLPath = [
    [
        [0, 0], [1, 0],
        [1, 1], [3, 1],
        [3, 2], [0, 2],
        [0, 0],
    ], [
        [0, 0], [2, 0],
        [2, 1], [1, 1],
        [1, 3], [0, 3],
        [0, 0],
    ], [
        [0, 0], [3, 0],
        [3, 2], [2, 2],
        [2, 1], [0, 1],
        [0, 0]
    ], [
        [1, 0], [2, 0],
        [2, 3], [0, 3],
        [0, 2], [1, 2],
        [1, 0],
    ],
];



export class Figure {
    position: Point;
    private sprites: number[][];
    private path: Point[];

    constructor(sprites: number[][], figurePath: number[][]) {
        this.position = new Point(0, 0);
        this.sprites = sprites;
        this.path = figurePath.map(p => new Point(p[0] * Tetris.SIZE, p[1] * Tetris.SIZE));
    }

    render(): Graphics {
        const graphics = new Graphics();
        const { x, y } = this.position;
        const path = this.path.map(p => p.set(p.x + x, p.y + y))

        graphics.lineStyle(1, 0xFFFFFF);
        graphics.drawPolygon(path);
        graphics.endFill();
        return graphics;
    }
}
