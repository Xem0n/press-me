interface iRegisterParams {
    show: () => void;
}

class Button {
    public readonly x: number;
    public readonly y: number;

    private visible: boolean;

    private showComponent!: () => void;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.visible = false;
    }

    public isVisible(): boolean {
        return this.visible;
    }

    public show() {
        if (this.isVisible()) {
            return;
        }

        this.visible = true;

        this.showComponent?.();
    }

    public registerComponent(params: iRegisterParams) {
        this.showComponent = params.show;
    }
}

export default Button;