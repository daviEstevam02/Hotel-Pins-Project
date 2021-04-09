import { Container, Content } from './styles';


export function Summary(){
   return(
    <Container>
        <Content>
            <input type="text"
                placeholder="Origem"
            />

            <input type="text"
             placeholder="Destino"
            />

            <input className="data" type="date"/>

            <input className="data" type="date"/>

        </Content>
    </Container>
   );
    
}