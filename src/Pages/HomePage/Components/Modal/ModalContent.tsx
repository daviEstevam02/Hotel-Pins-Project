import React from 'react'
import {Content} from './stylesModal';
import {FaTimes} from 'react-icons/fa';

type Props = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContent: React.FC<Props> = ({ setModalOpen }) => (


        <Content>
            <button className="exit" type='button' onClick={() => setModalOpen(false)}>
                <FaTimes size={16} color="#000"/>
            </button>

            <div className="buttons-form">
                <button className="login">Fazer Login</button>
                <button className="login">Cadastrar</button>
            </div>
        </Content>


)