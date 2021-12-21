import { useState, useEffect } from 'react';
import './Browse.scss';
import Navbar from '../../components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const Browse = () => {
  const [filmes, setFilmes] = useState([]);
  const [montado, setMontado] = useState(false);

  const getFilmes = async () => {
    await axios.get('/filme/findMany').then((response) => {
      if (montado) {
        setFilmes(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getFilmes();
  }, [montado]);

  return (
  
  <div className="browse">
      <Navbar />
      
      <div className="container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     
      <div class="container bg-info">
    <div class="nome text-center">
    <h1>**FILMES LANÇAMENTOS**</h1>
</div>
     
    <div class="p-1 mb-2 bg-info text-blue">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block rounded-thumbnail w-25"
      src="https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg"
       alt="First slide"
    />
    <Carousel.Caption>
      <h2><justify> CAPITÃ  MARVEL </justify></h2>
      <p>Data de estreia dia 25 de dezembro 2021.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-thumbnail w-25"
      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVxLXB4UpngxtMPNndsVI451JZ6TQSn3XejvWkUX3Bh80WKFlT"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2><justify> VENON</justify></h2>
      <p>Data de estreia dia 05 de maio de 2022</p>
       </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-thumbnail w-25"
      src="https://portalpopline.com.br/wp-content/uploads/2021/11/homem-aranha-trailer-640x800.jpg" 
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2><justify>HOMEM ARANHA 2</justify></h2>
      <p>Data de estreia dia 05 de maio de 2022</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>

  
</div>

                    </div>  
                  </div>
                  </div>
                
               
     
      <div class="container bg-info">
    <div class="nome text-center">
    <h1>**SERIES**</h1>
</div>
<div class="p-1 mb-2 bg-info text-black">
<Carousel>
<Carousel.Item>
    <img
      className="d-block rounded-thumbnail w-25"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaJm-eyDFNVbC4nylfjq1HRNbbTyj_CQHbQ&usqp=CAU" 
      alt="First slide"
    />

    <Carousel.Caption>
    <h2><justify> THE WITCHER</justify></h2>
      <p>2ª TEMPORADA</p> </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block rounded-thumbnail w-25"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jMcfgtUjQPDf6-Xq0KXm_rKb112ZttRL2g&usqp=CAU" 
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2><justify> DEXTER</justify></h2>
      <p> TEMPORADA FINAL.</p> 
   </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-thumbnail w-25"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZqifGMBh7HJPJk_hOElBtigNRtOhUkStHw&usqp=CAU" 
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2><justify> SUPERNATURAL</justify></h2>
         <p>TEMPORADA FINAL</p> 
   </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    </div>  
                  </div>
              
                    
</div>

   </div>  
      
  );
};

export default Browse;