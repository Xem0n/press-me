import React, { useEffect } from 'react';
import './Board.css';
import Button from './Button';
import {default as ButtonLogic} from 'api/button';
import board from 'api/board';

function Board() {
    const showNearButtons = (button: ButtonLogic) => {
        board.showNearButtons(button);
    };

    const buttonComponents = [];
    let key = 0;

    for (const button of board.getButtonsAsList()) {
        buttonComponents.push(<Button
                                key={key} 
                                button={button} 
                                showNearButtons={showNearButtons} />);

        key++;
    }

    useEffect(() => {
        board.getMiddleButton().show();
    }, []);

    return (
        <div className='Board'>
            {buttonComponents}
        </div>
    );
}

export default Board;