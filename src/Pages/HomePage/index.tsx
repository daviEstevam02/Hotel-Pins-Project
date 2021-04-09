import  { Container }  from './styles';
import { Header } from './Components/Header';
import { Summary } from './Components/Summary';
import { Content } from './Components/Content'; 

export function HomePage(){

    return (
        <Container>
            <Header />
            <Summary />
            <Content />
        </Container>
      
    );


}