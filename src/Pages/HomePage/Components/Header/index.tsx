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
            <img src={ logoHotel } alt="Hotel PIM"/>

          
            <Link to="/" className="link" >
                <IoBedSharp className="Icon" size={20} color="#000"/>
                Hospedagem
            </Link>
            <Link to="/" className="link" >
                <ImBriefcase className="Icon" size={20} color="#000"/>
                Pacotes
            </Link>
            <Link to="/" className="link">
                <IoAirplane  className="Icon" size={20} color="#000"/>
                Passagens
            </Link>
            <Link to="/"className="link">
                <IoAmericanFootballSharp  className="Icon" size={20} color="#000"/>
                Atrações
            </Link>

            <button type="button">
                <HiOutlineUserCircle size={40} color="#000" />
            </button>
            </Content>
        </Container>

    );
}