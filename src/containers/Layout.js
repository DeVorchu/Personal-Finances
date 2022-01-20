import React, { useContext, useState } from 'react'
import LoginBox from '../components/BoxType/LoginBox'
import { isAuthContext } from '../context/authContext'
import { LayoutWraper } from '../styles/Layout.styled'
import Dashboard from './Dashboard'

export default function Layout() {

    const LoginHandler = () =>{
        setisLogged(true)
    }

    const [isLogged, setisLogged] = useState(false)
    
    return (
        <LayoutWraper>
            {isLogged? 
            <>
            <Dashboard />
            
            
            </> : <LoginBox LoginHandler={LoginHandler}/> }
        </LayoutWraper>
           
        
    )
}
