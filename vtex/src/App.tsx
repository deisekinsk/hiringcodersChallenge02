import React from 'react';
import Home from './view/Home';
import { Title, Footer } from './styled';

const App: React.FC = () =>{
  return(
  <>
    
    <Title> e-Commerce </Title>
    
    <Home/>
    
    <Footer>
     DESAFIO #2  <a className="aFooter" href="https://www.linkedin.com/in/deise-kinsk-profile/">DEISE KINSK | KINSK@MSN.COM</a>
     </Footer>
        
  </>    
  );
}

export default App;