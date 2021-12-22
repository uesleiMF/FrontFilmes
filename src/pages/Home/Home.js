import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';
import axios from 'axios';
import CardCadastro from '../../components/CardCadastro/CardCadastro'

const Home = () => {

  const [filmes, setFilmes] = useState([]);
  const [mount, setMount] = useState(false);

  const shuffleArray = (array) => {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  
      return array.slice(0, 5);
    };
  
    useEffect(() => {
      setMount(true);
      listFilmes();
    }, [mount]);
  

  const listFilmes = async () => {
    await axios.get("/movie/findMany").then((response) => {
      if (mount) {
        setFilmes(response.data);
        }
    });
  };

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
          { shuffleArray(filmes).map((item) => (
            <CardCadastro
              titulo={item.title}
              imagem={item.cover}
              key={item.id}
            />
          ))}
        </div>
</div>
  
  )
}

export default Home