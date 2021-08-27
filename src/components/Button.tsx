import React, { useEffect, useState } from 'react';
import './Button.css';
import {default as ButtonLogic} from 'api/button';

type ButtonProps = {
    button: ButtonLogic
    showNearButtons: (button: ButtonLogic) => void
}

function Button({button, showNearButtons}: ButtonProps) {
    const [visible, setVisible] = useState(false);

    const getClass = () : string => {
        return visible ? 'Button-Visible' : '';
    };

    const show = () => {
        setVisible(true);
    };

    useEffect(() => {
        button.registerComponent({
            show: show
        });
    }, [button])

    return (
        <div
            onClick={() => {showNearButtons(button)}}
            className={'Button ' + getClass()}>
            <p>Press me!</p>
        </div>
    );
}

export default Button;