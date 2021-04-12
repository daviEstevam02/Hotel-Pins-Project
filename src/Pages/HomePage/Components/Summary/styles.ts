import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1320px;
    margin: -45px  auto 150px;
   
`;

export const Content = styled.form`
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

      
     
    }
    .box-content{
        display: block;
        margin: 0 15px 0 0;

        label{
            font-size: 18px;
            margin: 0 0 10px 10px;
            color:#ffffff;
        }
    }
    button{
        width: 100%;
        max-width: 200px;
        height: 50px;
        margin-top:20px;
        background-color:#FE9019;
        border:none ;
        border-radius:10px;
        color:#ffffff;

        display:flex;
        align-items:center;

        padding-left:50px;

        .icon-search{
            margin:0 10px 0 0;
        }
    }
    button:hover{
        background-color: #FFA419;
    }

`;

