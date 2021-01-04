import { Application, Graphics } from 'pixi.js';
import { Figure, FigureL, FigureLPath } from './Figure';

export class Tetris {
    static SIZE = 30;
    app: Application;
    private side = 0;
    private figureGraphics: Graphics;

    constructor() {
        const height = document.body.offsetHeight;
        this.app = new Application({
            height,
        });
        document.body.appendChild(this.app.view);
        this.keyBinding();

        this.generateFigure();

        setInterval(() => {
            this.step();
        }, 1000);
    }

    keyBinding(): void {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                if (this.side > 2) {
                    this.side = 0;
                } else {
                    this.side++;
                }
                this.generateFigure();
                this.figureGraphics.y = 0;
            }
        });
    }

    generateFigure(): void {
        if (this.figureGraphics) {
            this.app.stage.removeChild(this.figureGraphics);
        }
        const figure = new Figure(FigureL, FigureLPath[this.side]);
        this.figureGraphics = figure.render();
        this.app.stage.addChild(this.figureGraphics);
    }

    step(): void {
        this.figureGraphics.y += 30;
    }
}
