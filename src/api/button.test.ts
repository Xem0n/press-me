import Button from './button';

test('show button', () => {
    const button = new Button(2, 3);

    expect(button.isVisible()).toBe(false);

    button.show();

    expect(button.isVisible()).toBe(true);
});