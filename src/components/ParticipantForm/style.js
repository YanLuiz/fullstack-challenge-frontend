import styled from "styled-components"



export const Container = styled.form`
    display: flex;
    background: #00b8e2;
    align-items: center;
    margin: 0 auto;
    padding-left: 250px;
    padding-right: 250px;
    padding-top: 80px;
    padding-bottom: 60px;
    gap: 20px;
    justify-content: center;
    border-radius: 5px;


    input {
       
        padding: 20px 100px 20px 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
        &:focus {
            border-color: #0077a3;
            outline: none;
            
        } 
        > input[type="number"]::-webkit-inner-spin-button,
        > input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        > input[type="number"] {
            -moz-appearance: textfield;
        }
    }

    
    button {
        background-color: transparent;
        padding: 20px 80px 20px 50px;
        border-radius: 5px;
        color: #fff;
        border: 1px solid #fff;
        font-weight: bold;
        font-size: 20px;
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

`