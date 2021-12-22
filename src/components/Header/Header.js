import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../img/logo.jpg"
import Logado from '../Logado/Logado'
import Login from '../Login/Login'

const Header = () => {

    const [logado, setLogado] = useState(false)
    useEffect(() => {
        const itemStr = localStorage.getItem("token");
        if (!itemStr) {
          setLogado(false);
        } else {
          const item = JSON.parse(itemStr);
          const now = new Date();
          if (now.getTime() > item.expira) {
            localStorage.removeItem("token");
            setLogado(false);
          } else {
            setLogado(true);
          }
        }
      }, [logado]);
      
    return (
        <nav className="flex bg-black text-white justify-between items-center p-4">
            <div className='items-center flex'>
            <img src={Logo} width='100%' height='70px' className='' />
            <span className="mx-4 text-3xl">CineFilmes</span>
            <span className='mx-8'><ul className='inline'>
                <li className='inline mx-6'><Link to="/">Home</Link></li>
                <li className='inline mx-4'width='100%' height='70px'><Link to="/list">Lista de filmes</Link></li>
                </ul></span>
            </div>
            {logado ? <Logado setLogado={setLogado} /> : <Login setLogado={setLogado} /> }
                    </nav>
    )
}

export default Header
