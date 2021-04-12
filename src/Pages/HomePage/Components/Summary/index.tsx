import { Container, Content } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

export function Summary(){
   return(
    <Container>
        <Content>

            <div className="box-content">
                <label htmlFor=""> Origem:</label>
                <input type="text"
                    placeholder="Origem"
                />
            </div>

            <div className="box-content">
                <label htmlFor=""> Destino:</label>
                <input type="text"
                    placeholder="Destino"
                />
            </div>

            <div className="box-content">
                <label htmlFor="">Data Ida:</label>
                <input className="data" type="date"/>
            </div>
            <div className="box-content">
                <label htmlFor="">Data volta:</label>
                <input className="data" type="date"/>
            </div>

            <button type="button">
             <AiOutlineSearch className="icon-search" size={25} color="#ffff"/>
            Buscar
            </button>

        </Content>
    </Container>
   );
    
}