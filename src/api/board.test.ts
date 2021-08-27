import board from './board';
import Button from './button';

test('generating buttons', () => {
    const buttons = board.getButtons();

    expect(buttons.length).toBe(5);

    for (const row of buttons) {
        expect(row.length).toBe(5);
    }
});

test('get buttons as list', () => {
    const buttons = board.getButtonsAsList();

    expect(buttons.length).toBe(25);

    for (const button of buttons) {
        expect(button).toBeInstanceOf(Button);
    }
});

test('get middle button', () => {
    const button = board.getMiddleButton();

    expect(button.x).toBe(2);
    expect(button.y).toBe(2);
});

test('show near buttons', () => {
    const buttons = board.getButtons();
    
    board.showNearButtons(buttons[3][2]);

    // right
    expect(buttons[3][3].isVisible()).toBe(true);
    // left
    expect(buttons[3][1].isVisible()).toBe(true);
    // bottom
    expect(buttons[2][2].isVisible()).toBe(true);
    // top
    expect(buttons[4][2].isVisible()).toBe(true);
});