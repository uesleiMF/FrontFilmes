import './Card.scss';

import { useNavigate } from 'react-router-dom';

export default function Card(props) {

  const navigate = useNavigate();

  const vaPPlanta = () => {
    navigate('/plant', { state: props.id })
  }

  return (
    <div className='card' onClick={vaPPlanta}>
      <img src={props.image} alt={props.name} />
      <span>{props.name}</span>
    </div>
  )
}