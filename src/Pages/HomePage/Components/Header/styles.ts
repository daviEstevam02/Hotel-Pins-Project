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


    .logoImg{
        margin-top:5px;
    }
    .link-icon{
        align-self: flex-end;
        padding:0 0 8px;

        position:relative;

       
        .link{
            display: flex;
            align-items: center;

            text-decoration: none;
            color: #ffffff;
            font-size: 20px;
        }
        .link:hover{
            color: #FE9031;
        }
    }

    .material-icons{
        margin: -5px 5px 0 0;
    }
    #person{
        color:#ffffff
    }
    #person:hover{
        color: #FE9031;
    }
    #bed{
        margin-top:-1px;
    }
    
  

    button{
        background: transparent;
        border: 0;
        margin-top:40px;
    }

    .form-container {
        position: relative;
        display: flex;
        flex-direction: column;
        top:15px;
    }
`;
