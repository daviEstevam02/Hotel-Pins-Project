import styled from 'styled-components';

export const Container = styled.header`

    background:var( --background-header);

`;

export const Content = styled.div`
    max-width: 1320px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .link{
        text-decoration: none;
        color: #000;
        margin-top:50px;
        font-size: 20px;
    }
    .Icon{
        margin: 2px 10px -1px;
    }
    
    button{
        background: transparent;
        border: 0;
        margin-top:40px;

    }
`;
