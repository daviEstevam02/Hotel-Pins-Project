import React from 'react';
import { createPortal } from 'react-dom';
import { Wrapper } from './stylesModal';


type Props ={
    modalOpen: boolean;
}

export const Modal: React.FC<Props> = ({modalOpen, children}) => {
    if(!modalOpen) return null;

    return(
        <Wrapper>

        <div className="target"></div>

            {children}

        </Wrapper>
    )
}
