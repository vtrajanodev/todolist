import styled from "styled-components";

type doneProps = {
    done: boolean
}

export const Container = styled.div(({ done } : doneProps) => (
    `
    display: flex;
    align-items: center;

    background-color: #20212c;

    margin-bottom: 10px;
    margin-top: 20px;
    padding: 10px;

    border-radius: 10px;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'} 
    }

    `   
)) 