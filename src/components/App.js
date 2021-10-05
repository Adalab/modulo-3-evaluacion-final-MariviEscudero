import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import getCharactersFromApi from '../services/charactersApi';
import '../styles/App.scss';
import CharactersList from './CharactersList';
import CharacterDetail from './CharacterDetail';
import PageError from './PageError';
import Footer from './Footer';
import Header from './Header';
import Filters from './Filters';

const App = () => {
  //variables de estado

  const [characters, setCharacters] = useState([]);
  const [searchNameInput, setSearchNameInput] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('all');

  //datos Api

  useEffect(() => {
    getCharactersFromApi().then((initialData) => {
      setCharacters(initialData);
    });
  }, []);

  //router ruta detaildata

  const routeData = useRouteMatch('/characterDetail/:id');
  const characterId = routeData !== null ? routeData.params.id : '';

  const selectedCharacter = characters.find(
    (character) => parseInt(character.id) === parseInt(characterId)
  );

  //controlar input buscar por nombre

  const handleSearchInput = (value) => {
    setSearchNameInput(value);
  };

  // controlar select

  const handleSearchSpecie = (value) => {
    setSearchSpecie(value);
  };

  //filtros

  const filteredCharacter = characters
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchNameInput.toLocaleLowerCase())
    )
    .filter(
      (character) => searchSpecie === 'all' || character.specie === searchSpecie
    );

  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/characterDetail/:id">
          <CharacterDetail detailData={selectedCharacter} />
        </Route>
        <Route exact path="/">
          <main className="main">
            <section>
              <Filters
                handleSearchInput={handleSearchInput}
                handleSearchSpecie={handleSearchSpecie}
                inputValue={searchNameInput}
                selectValue={searchSpecie}
              />
            </section>
            <section className="main__section">
              <CharactersList data={filteredCharacter} />
            </section>
          </main>
        </Route>
        <Route>
          <PageError />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
