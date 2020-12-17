//Container = comunicación con servidor
import React, { useState, useEffect } from "react";
import CharactersList from "../Components/Characters/CharacterList";
import { getCharacters } from "Utils/Requester";
/*
class Characters extends Component{
    constructor(){
        this.state = {
            data: null,
            page: 1,
        }

        this.handlePage = this.handlePage.bind(this);
    }

    componentWillMount(){
        //Fetch to Get Data
        fn().then(data => this.setState({data}));
    }
    
    render(){
        return <div>
            <input value={this.state.page} onChange={this.handlePage}/>
        </div>;
    }

    handlePage = (e) => {
        this.setState({page: +e.target.value})
    }
}*/

function Characters() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const data = arrState[0] => Variable de estado
  //const setData = arrState[1] => Actualizar variable de estado

  //Variable para controlar la paginación
  const [page, setPage] = useState(1);

  //Filosofia: Realizar operaciones para SINCRONIZAR el estado
  useEffect(() => {
    //get Data and set Data to "data" state
    setLoading(true);
    getCharacters(page)
      .then((resData) => {
        setError(null);
        setData(resData);
        setLoading(false);
      })
      .catch((resError) => {
        setData(null);
        setError(resError);
        setLoading(false);
      });
    /*
    fetch("https://rickandmortyapi.com/api/character?page=${page}")
      .then((res) => res.json())
      .then((resData) => setData(resData));
    */
    //Cuando quiere que se ejecute este efecto??
    //Sin lista => SIEMPRE
    //Lista vacía => Solamente al principio => componentDidMount()
    //Lista de variables => Cuando ESAS variables cambien
  }, [page]);

  //e.target.value => String
  //+"1" => 1
  const handlePage = (e) => setPage(+e.target.value);

  return (
    <>
      <h1>Get Charactes</h1>
      <input
        readOnly={loading}
        autoFocus
        type="number"
        value={page}
        onChange={handlePage}
      />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <>
          <CharactersList items={data.results} />
        </>
      )}
    </>
  );
}

export default Characters;
