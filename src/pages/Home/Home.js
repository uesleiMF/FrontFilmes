import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Frame from '../../components/Frame/Frame';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

import axios from 'axios';

import './Home.scss';

export default function Home() {

  const [plantas, setPlantas] = useState([]);
  const [montado, setMontado] = useState(false);

  const getPlantas = async () => {
    await axios.get('/plant/findMany')
    .then(response => {
      if(montado) {
        setPlantas(response.data);
      }
    })
  }

  useEffect(() => {
    setMontado(true)
    getPlantas()
  }, [montado])

  return(
    <div className='home'>
      <Navbar />
      <Frame 
        image="https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg"
        
        
      />
      <div className='home__cards'>
        {
          plantas.map(item => (
            <Card
              id={item.id}
              image={item.imageUrl}
              name={item.commonName}
              key={item.id}
            />
          ))
        }
      </div>
      <Footer />
    </div>
  )
}