import styled from 'styled-components'

export const LoginBoxContainer = styled.div`
    position: relative;
    width: 420px;
    height: 260px;
    background-color: #0E202D;
    color: white;
    font-family: 'Strait', sans-serif;
    font-weight: normal;
    font-size: 36px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #FFFFFF;
    border-radius: 20px;
    border: 2px solid #070707;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    label{
        font-size: 12px;
        text-align: left;
    }

    input{
        font-family: 'Roboto';
        font-size: 14px;
        width: 85%;
    }
`
export const LoginInputBox = styled.div`
    border-bottom: 1px solid #0B121B;
    margin-bottom: 30px;
`

export const LoginInputWraper = styled.div`
    width: 90%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button{
        margin-top: 30px;
        border: 2px solid #070707;
    }

    fieldset{
        border: 2px black solid;
        border-radius: 5px;
    }

`

export const LoginInputButton = styled.div`
    position: absolute;
    content: '';
    color: white;
    width: 360px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0E202D;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.53);
    border-radius: 20px;
    z-index: -1;
    &:hover{
        cursor: pointer;
    }
    
`

export const LoginInputBoxBottom = styled.div`
    position: absolute;
    width: 360px;
    height: 60px;
    top: 270px;
    font-family: Strait;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.08em;  

    &:hover ${LoginInputButton}{
        cursor: pointer;
        background-color: #10293b; 
    }

  

`




