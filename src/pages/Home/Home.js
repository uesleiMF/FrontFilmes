import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../../components/Navbar/Navbar';
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
    
        
      
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block rounded-thumbnail"
            src="https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg"
            width="100%"
            height="350px"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2><justify> CAPITÃ  MARVEL </justify></h2>
            <p>Data de estreia dia 25 de dezembro 2021.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded-thumbnail"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVxLXB4UpngxtMPNndsVI451JZ6TQSn3XejvWkUX3Bh80WKFlT"
            width="100%"
            height="350px"
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <h2><justify> VENON</justify></h2>
            <p>Data de estreia dia 05 de maio de 2022</p>
             </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded-thumbnail"
            src="https://portalpopline.com.br/wp-content/uploads/2021/11/homem-aranha-trailer-640x800.jpg" 
            width="100%"
            height="350px"
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <h2><justify>HOMEM ARANHA 2</justify></h2>
            <p>Data de estreia dia 05 de maio de 2022</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   

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