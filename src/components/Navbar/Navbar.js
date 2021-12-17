/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.scss';
import logo from './img/logo.jpg';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__right'>
                <img className='navbar__right__logo' src={ logo }  title= 'Cine Filmes' alt='Logo Cine Filmes' />
                <ul className='navbar__right__links'>    
                    <li className='navbar__right__links__itens'>
                        <a>
                            <Link 
                                className='navbar__right__links__text'
                                title="Início"
                                to= "/"
                            >
                                Inicio
                            </Link>
                        </a>
                    </li>
                    <li className='navbar__right__links__itens'>
                        <a>
                            <Link 
                                className='navbar__right__links__text'
                                title="Filme"
                                to= "/filmes"
                            >
                                Filmes
                            </Link>
                        </a>
                    </li>        
                </ul>
            </div>
            <div className='navbar__left'>
                <ul className='navbar__left__links'>
                    <li className='navbar__left__links__itens'>
                        <a>
                            <Link className='navbar__left__links__icons'
                            title='Perfil'
                            to='/perfil'
                            >
                                <CgProfile size={35} />
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>   
        </div>
    );
};

export default Navbar;