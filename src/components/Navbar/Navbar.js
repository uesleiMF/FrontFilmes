import './Navbar.scss';

export default function Navbar() {
  return(
    <div className='navbar'>
      <h1 className='navbar__logo'>CineFilmes</h1>
      <ul className='navbar__links'>
        <a className='navbar__links__items' href='/cadastro'><li>Cadastrar</li></a>
        <a className='navbar__links__items' href='/list'><li>Lista de Filmes</li></a>
        <a className='navbar__links__items' href='/movie'><li>Filmes</li></a>
        <a className='navbar__links__items' href='/login'><li>Login</li></a>
   
       
      </ul>
    </div>
  )
}