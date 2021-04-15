import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: 6px;
    position:absolute;
    padding:30px;


    display:block;

    top: 70px;
    right:-10px;

    width: 300px;

    background: #f6f6f6;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.15);

    .target{

        position:absolute;
        width: 0; 
        height: 0; 
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom:12px solid #f6f6f6;
        
        top:-10px;
        right:14px;
    }
`;

export const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    flex-direction: column;
    margin:0 auto;

    .exit{
        background:transparent;
        border: none;

        position: absolute;

        top: -15px;
        right: 30px;
        opacity: 0.2;

    }

    .login{
        width: 250px;
        height: 50px;
        margin-top:20px;
        background-color:#FE9019;
        border:none ;
        border-radius:10px;
        color:#ffffff;

        display:flex;
        align-items:center;
        justify-content: center;

        box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.15);
    }

    .login:hover{
        background: #EB8517;
    }
    .buttons-form{
        margin-top:20px;
    }

`; 