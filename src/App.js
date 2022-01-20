import { useState } from "react";
import { isAuthContext } from "./context/authContext";
import Layout from './containers/Layout.js'
import { UiStyleWraper } from "./styles/UI/ui.styled";


function App() {
    
  return (
    <UiStyleWraper>
      <Layout />   
    </UiStyleWraper>
       
  );
}

export default App;
