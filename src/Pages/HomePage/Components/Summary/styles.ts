import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    margin: -25px  auto 150px;
   
`;

export const Content = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between; 
    
    input{
        width: 100%;
        height: 50px;
        color:#333;
        border: 1px solid #dcdce6;
        border-radius: 10px;
        padding:0 24px;
        margin: 0 5px;

        &.data{
            width:60%;
        }
     
    }

`;
export const Form = styled.div `
    display: block;

   
`;
