/* eslint-disable no-unused-vars */
import { useState } from 'react/cjs/react.development';
import './Filme.scss';

const Filme = () => {

  const [filme, setFilme] = useState({});

  return (
    <div className='filme'>
      <h2>{filme.scientificName}</h2>
      <img src={filme.imageUrl} alt={filme.commonName} />
      <h3>{filme.commonName}</h3>
      <p>{filme.description}</p>
    </div>
  )
}

export default Filme;