import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";

import CardList from "../../components/CardList/CardList";

const List = () => {
  const [filmes, setFilmes] = useState([]);
  const [mount, setMount] = useState(false);
  const [loading, setLoading] = useState("Filmes Carregando...")

  const listFilmes = async () => {
    await axios.get("/movie/findMany").then((response) => {
      if (mount) {
        setFilmes(response.data);
        setLoading(`Filmes ${filmes.length} Exebidos:`)
      }
    });
  };

  useEffect(() => {
    setMount(true);
    listFilmes();
  }, [mount, loading]);

  

  return (
    <>
      <Header />
      <div className="mt-10 mx-auto text-center text-7xl">Filmes Lançamentos!</div>
      <div>{loading}</div>

<div></div> <br></br>
      <div className="grid grid-cols-4 gap-4 gap-y-8 justify-center p-8">
      { filmes.map((item) => (
            <CardList
            filme={item}  
            key={item.id}
            />
          ))}      
          </div>
    </>
  );
};

export default List;
