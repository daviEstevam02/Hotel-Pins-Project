import { Link } from 'react-router-dom';

import  logoHotel  from '../../../../assets/logoHotel3.png';
import { Container, Content } from './styles';

import { ImBriefcase } from "react-icons/im";
import { IoAmericanFootballSharp, IoAirplane, IoBedSharp } from 'react-icons/io5';
import { HiOutlineUserCircle } from 'react-icons/hi';

import  { Modal }  from '../Modal';
import{ ModalContent } from '../Modal/ModalContent';

import { useState } from 'react';

export function Header(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <Container>
            <Content>

            <img className="logoImg" src={ logoHotel } alt="Hotel PIM"/>


            <div className="link-icon">
                <Link to="/" className="link" >
                    <span className="material-icons" id="bed">&#xea45;</span>
                    Hospedagem

                    <div className="linha-horizontal"></div>
                </Link> 
            </div>
            <div className="link-icon">
                <Link to="/" className="link" >
                    <span className="material-icons">&#xf1cc;</span>
                    Pacotes

                    <div className="linha-horizontal"></div>
                </Link>
            </div>

            <div className="link-icon">
                <Link to="/" className="link">
                <span className="material-icons">&#xe905;</span>
                    Passagens

                    <div className="linha-horizontal"></div>
                </Link>
            </div>


            <div className="link-icon">
                <Link to="/"className="link">
                <span className="material-icons">&#xea63;</span>
                    Atrações

                    <div className="linha-horizontal"></div>
                </Link>
            </div>


            <div className="form-container">
                <button type="button" onClick={() => setIsOpen(true)}>
                    <span className="material-icons" id="person">&#xe7fd;</span>
                </button>
               
                <Modal modalOpen={isOpen}>
                    <ModalContent setModalOpen={setIsOpen}>
                            <h1>Modal</h1>
                    </ModalContent>
                </Modal>
            </div>

            </Content>
        </Container>

    );
}
