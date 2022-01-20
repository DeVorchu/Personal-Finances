import React from 'react'
import { LoginBoxContainer, LoginInputBox, LoginInputBoxBottom, LoginInputButton, LoginInputWraper } from '../../styles/components/loginBox.styled'
import { FaUserAlt, FaKey } from 'react-icons/fa';

export default function LoginBox(props) {

    const HandleLogin = () =>{
        props.LoginHandler()
    }

    return (
        <>
        <LoginBoxContainer>
            <span> MOJE FINANSE</span>

            <LoginInputWraper>
                <label>LOGIN</label>
                <LoginInputBox>
                    <FaUserAlt size={16} color='#0B121B'/>
                    <input type='text' placeholder='Wpisz login tutaj...'/>
                </LoginInputBox>

                <label>HASŁO</label>
                <LoginInputBox>
                    <FaKey size={16} color='#0B121B'/>
                    <input type='password' placeholder='Wpisz hasło tutaj...'/>
                </LoginInputBox>
            </LoginInputWraper>     

            
            <LoginInputBoxBottom onClick={HandleLogin}> 
                <LoginInputButton> LOGOWANIE</LoginInputButton>
            </LoginInputBoxBottom>
        </LoginBoxContainer>

        
        </>
    )
}
