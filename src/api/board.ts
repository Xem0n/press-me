import Button from './button';

const WIDTH = 5;
const HEIGHT = 5;

class Board {
    private buttons: Array<Array<Button>>;

    constructor() {
        this.buttons = this.generateButtons();
    }

    private generateButtons(): Array<Array<Button>> {
        const buttons = Array(WIDTH).fill(Array(HEIGHT));

        for (let y = 0; y < HEIGHT; y++) {
            buttons[y] = [];

            for (let x = 0; x < WIDTH; x++) {
                buttons[y][x] = new Button(x, y);
            }
        }

        return buttons;
    }

    public getButtons(): Array<Array<Button>> {
        return this.buttons;
    }

    public getButtonsAsList(): Array<Button> {
        const buttons = [];

        for (let y = 0; y < HEIGHT; y++) {
            buttons.push(...this.buttons[y]);
        }

        return buttons;
    }

    public getMiddleButton(): Button {
        const x = Math.round(WIDTH / 2) - 1;
        const y = Math.round(HEIGHT / 2) - 1;

        return this.buttons[y][x];
    }

    public showNearButtons(button: Button) {
        const x = button.x;
        const y = button.y;

        // right
        this.buttons[y]?.[x + 1]?.show();
        // left
        this.buttons[y]?.[x - 1]?.show();
        // bottom
        this.buttons[y - 1]?.[x]?.show();
        // top
        this.buttons[y + 1]?.[x]?.show();
    }
}

export default new Board();