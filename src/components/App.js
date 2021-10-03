import { useState, useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import getCharactersFromApi from '../services/charactersApi';
import ls from '../services/ls';
import headerLogo from '../images/Rick_and_Morty_-_logo_(English).png';
import '../styles/App.scss';
import CharactersList from './CharactersList';
import CharacterFilter from './CharacterFilter';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchNameInput, setSearchNameInput] = useState('');
  

  useEffect(() => {
      getCharactersFromApi().then((initialData) => {
        setCharacters(initialData);
      });
  }, []);
  

  const routeData = useRouteMatch('/characterDetail/:id');
  console.log(routeData);
  const characterId = (routeData !== null) ? routeData.params.id : '';

  const selectedCharacter = characters.find((character) =>
    parseInt(character.id) === parseInt(characterId)
  );
  console.log(selectedCharacter);


  const handleSearchInput = (value) => {
    setSearchNameInput(value);
  };

  const filteredCharacter = characters.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchNameInput.toLocaleLowerCase())
  );
  

  return (
    <div className="page">
      <header className="header">
        <img className="header__image" src={headerLogo} alt="" />
      </header>
      <Switch>
        <Route path="/characterDetail/:id">
          <CharacterDetail detailData= {selectedCharacter}/>
        </Route>
        <Route exact path="/">
          <main className="main">
            <section>
              <CharacterFilter
                value={searchNameInput}
                handleSearchInput={handleSearchInput}
              />
            </section>
            <section className="main__section">
              <CharactersList data={filteredCharacter} />
            </section>
          </main>
        </Route>
        <Route>
          <section className="main__errorpage">
            <p>
              Malditos agujeros espacio-temporales! la página que buscas no
              existe en este universo...Prueba con otra dirección o ve a inicio
              <Link to='/'>
              <span> aquí</span> 
              </Link>
            </p>
          </section>
        </Route>
      </Switch>
      <footer className="footer">
        <p>&copy; Marivi Escudero</p>
        <p>Specie: baby Front-endian &#128125;</p>
      </footer>
    </div>
  );
};

export default App;
