import React, {useState, useEffect} from 'react';

import { Content, Container } from './styled';
import api from '../../services/api';

interface IProduct{
  id:number;
  photo:string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () =>{

    const [data, setData] = useState<IProduct[]>([]);
    
    //api
    useEffect(() =>{
      api.get('').then(
        response => {
          setData(response.data)
        }
      )
    }, [])
    
  

  return(
   <Container> 
    <Content>
      <section>

        { data.map(prod => (
            <div className="product-content" key={prod.id}>
                <img src= {prod.photo} alt="suit" width="200" height="auto"/>
                <h4>{prod.name}</h4>
                <span>{prod.description}</span>
                <h1>R$ {prod.price}</h1>
                <button className="Button"  >BUY</button>
            </div> 
        ))}        
        
      </section>
    </Content>
    </Container>
  );
}

export default Home;