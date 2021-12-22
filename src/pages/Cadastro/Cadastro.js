import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Cadastro.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';






const Cadastro = () => {
  const navigate = useNavigate();

  

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const name = evento.target.name.value;
    const email = evento.target.email.value;
    const birthdate = evento.target.birthdate.value;
    const password = evento.target.password.value;
    const passwordConfirmation = evento.target.passwordConfirmation.value;
    const imageUrl = evento.target.imageUrl.value;

    if (name.length < 3) {
      toast.error(`no mínimo 3 caracteres`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
      return;
    }

    if (password !== passwordConfirmation) {
        toast.error(`senhas diferentes!`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
        });
        return;
      }

    const newUser = {
      name,
      email,
      birthdate,
      password,
      passwordConfirmation,
      imageUrl,
    };
    axios
      .post("/user/create", newUser)
      .then((response) => {
        toast.success('Usuário criado com sucesso', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
      })
      .catch((err) => {
        console.log(err.message);
      });

    setTimeout(() => {
      navigate("/");
    }, 3000);
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
export default Cadastro;
