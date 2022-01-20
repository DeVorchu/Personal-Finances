import styled from 'styled-components'

export const UiStyleWraper = styled.div`
    button, input{
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        background-color: transparent;
        color: #ddd;
        transition: .2s;
        font-weight:800;
        font-size: 18px;
        margin-top: 3px;
        &:focus{
            outline: none;
        }

        &:hover{
            background-color: #062e3f;
            color: #fff;
            cursor: pointer;
        }
    }

    input{
        padding: 5px 10px;
        margin: 2px;
        &:hover{
            background-color: transparent;
            color: #fff;
        }
    }
`