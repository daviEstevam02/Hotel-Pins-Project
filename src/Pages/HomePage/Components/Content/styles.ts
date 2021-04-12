import styled from 'styled-components';

export const Conteiner = styled.section`
    max-width: 1280px;
    margin: 0 auto;
`;

export const Section = styled.div`
   display: flex;
    align-items:center;
    justify-content: space-between;

        .Card-product{
            background-color: #ffffff;
            width: 310px;
            height: 500px;
            border-radius: 8px;
            margin-bottom:70px;
            border: 1px solid #dcdce6;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);


            img{
                max-width: 309px;
                border-radius:6px;
            }
            .span{
                position: absolute;
                border-radius: 6px;
                margin:-15px 0 0 10px;
                border: 1px solid #f0f2f5;
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
            .reserve:hover{
                cursor: pointer;

            }
            
        }
        .Card-product:hover{
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

            cursor: pointer;
        }
`;