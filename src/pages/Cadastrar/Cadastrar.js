import './Cadastrar.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import logo from '../../img/logo.jpg';

const Cadastrar = () => {

    let navigate = useNavigate();

    const handleSubmit = async evento => {
        evento.preventDefault();

        const name = evento.target.name.value;
        const email = evento.target.email.value;
        const birthdate = evento.target.birthdate.value;
        const imageUrl = evento.target.imageUrl.value
        const password = evento.target.password.value;
        const passwordConfirmation = evento.target.passwordconfirmacao.value;

        const user = {
            name,
            email: email.toUpperCase(),
            birthdate,
            imageUrl,
            password,
            passwordConfirmation,
        };

        axios.post('/user/create', user).then((response) => {
            navigate('/browse')
        })
    };

    return (
        <div className='cadastrar'>
            <div className='cadastrar__background'>
                <div className='cadastrar__navbar'>
                    <img className='cadastrar__logo' src={ logo }  title= 'CineFilmes' alt='Logo CineFilmes' />
                    <ul className='cadastrar__links'>    
                        <li className='cadastrar__links__itens'>
                            <Link 
                                className='cadastrar__links__text'
                                title="Entrar"
                                to= "/login"
                            >
                                Entrar
                            </Link>
                        </li>
                    </ul>     
                </div>
                <div className='cadastrar__background__bottom'>
                    <div className='cadastrar__text'>
                        <h1>
                        Filmes, Séries
                        </h1>
                    </div>
                    <form className='cadastrar__cadastra' onSubmit={handleSubmit}>
                        <div className='cadastrar__cadastra__titulo'>
                            <h1>Cadastrar</h1>
                        </div>
                        <input 
                        type='text' 
                        id='id_text' className='cadastrar__cadastra__form' 
                        name='name' 
                        placeholder='Name' 
                        required />
                        <input 
                        type='email' 
                        id='id_email' className='cadastrar__cadastra__form' 
                        name='email' 
                        placeholder='Email' 
                        required />
                        <input 
                        type='date' 
                        id='id_birday' className='cadastrar__cadastra__form' 
                        name='birthdate' 
                        placeholder='Data de nascimento' 
                        required />
                        <input 
                        type='text' 
                        id='id_image' className='cadastrar__cadastra__form' 
                        name='imageUrl' 
                        placeholder='Imagem' 
                        required />
                        <input 
                        type='password'
                        className='cadastrar__cadastra__form' 
                        id='id_pass' 
                        name='password' 
                        placeholder='Adicione uma senha' required />
                        <input 
                        type='password' 
                        className='cadastrar__cadastra__form' id='id_passconfirmacao' 
                        name='passwordConfirmation' 
                        placeholder='Adicione a mesma senha' 
                        required />
                        <button type='submit' className='cadastrar__cadastra__button' title='Cadastrar'>Enviar</button>
                    </form>
                </div>
            </div>   
        </div>
    )
}

export default Cadastrar;