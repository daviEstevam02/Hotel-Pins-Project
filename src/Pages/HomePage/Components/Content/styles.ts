import styled from 'styled-components';

export const Conteiner = styled.section`
    max-width: 1320px;
    margin: 0 auto;

    p{
        margin: 0 0 10px 0;
    }
    h1{
        margin: 5px 0 10px 0;
    }
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
            color:#444444;

            img{
                max-width: 309px;
                border-radius:6px;
            }
            .span{
                position: absolute;
                border-radius: 6px;
                margin:-15px 0 0 30px;
                border: 1px solid #f0f2f5;
                background-color: #ffffff;
                text-transform:uppercase;
            }
            h1{
                margin: 20px 0 10px 30px;
                font-size:28px;
            }
          
            .reserve{
                margin:70px 0 0 150px;
                display: flex;
                align-items:center;
            }
            .reserve:hover{
                cursor: pointer;

            }
            .rating-section{
                display:flex;
                align-items:center;
                margin:70px 0 0 30px;

                .rating{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius: 40%;
                    width: 30px;
                    height:30px;
                    background:#0B930B;
                    color:#f6f6f6;
                    font-size:15px; 
                    margin-right:10px
               }
               .material-icons{
                   color:#ffa371;
               }
            }
            
            
        }
        .Card-product:hover{
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

            cursor: pointer;
        }
`;