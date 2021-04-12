import { Link } from 'react-router-dom';
import  logoHotel  from '../../../../assets/logoHotel.png';

import { Container, Content } from './styles';

import { ImAirplane, ImBriefcase } from "react-icons/im";
import { IoMdBed } from 'react-icons/io';
import { IoAmericanFootballSharp, IoAirplane, IoBedSharp } from 'react-icons/io5';
import { HiOutlineUserCircle } from 'react-icons/hi';

export function Header(){
    return(
        <Container>
            <Content>
            <img className="logoImg" src={ logoHotel } alt="Hotel PIM"/>

          
            <Link to="/" className="link" >
                <IoBedSharp className="Icon" size={20} color="#ffff"/>
                Hospedagem
            </Link>
            <Link to="/" className="link" >
                <ImBriefcase className="Icon" size={20} color="#ffff"/>
                Pacotes
            </Link>
            <Link to="/" className="link">
                <IoAirplane  className="Icon" size={20} color="#ffff"/>
                Passagens
            </Link>
            <Link to="/"className="link">
                <IoAmericanFootballSharp  className="Icon" size={20} color="#ffff"/>
                Atrações
            </Link>

            <button type="button">
                <HiOutlineUserCircle size={40} color="#ffff" />
            </button>
            </Content>
        </Container>

    );
}