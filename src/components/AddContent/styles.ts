import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 10px;
    border: 1px solid #555;
    padding: 10px;
    border-radius: 15px;

    input{
       background-color: transparent;
       border: 0;
       display: flex;
       flex: 1;
       outline: 0;
       color: #fff;
       font-size: 18px;

    }

    input::placeholder{
        padding: 2px;
        font-style: italic;
    }

    button{
        padding: 5px;
        margin-left: 8px;
        font-weight: bold;
        width: 80px;
        border-radius: 8px;
    }
`