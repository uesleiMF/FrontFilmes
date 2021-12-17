import './Card.scss';
import { UseNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = UseNavigate();

    const goFilme = () => {
        navigate('/filme', { state: props.id })
    }

    return (
        <div className='container'>
            <div className='card' onClick={goFilme}>
                <img src={props.img} alt={props.name} />
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default Card;