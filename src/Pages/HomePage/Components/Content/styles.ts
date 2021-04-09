import styled from 'styled-components';

export const Conteiner = styled.section`
    max-width: 1320px;
    margin: 0 auto;

`;

export const Section = styled.div`
    display: flex;
    align-items:center;

        .Card-product{

            display:block;
            background-color: var(--background-header);
            width: 300px;
            height: 490px;
            border-radius: 8px;
            margin: 15px;
            
            img{
                max-width: 299px;
            }
            .span{
                position: absolute;
                border-radius: 6px;
                margin:-15px 0 0 10px;
                border: 1px solid #dcdce6;
                background-color: #ffffff;
                text-transform:uppercase;
            }
            h1{
                margin: 20px 10px 0;
            }
            p{
                margin: 20px 10px 0;
            }
            .reserve{
                margin:150px 0 0 150px;
                display: flex;
                align-items:center;
            }
            
        }
`;