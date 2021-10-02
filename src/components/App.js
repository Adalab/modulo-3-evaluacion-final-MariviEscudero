import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import ls from '../services/ls';
import headerLogo from '../images/Rick_and_Morty_-_logo_(English).png';
import '../styles/App.scss';
import CharactersList from './CharactersList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchNameInput, setSearchNameInput] = useState('');
  console.log(characters);

  useEffect(() => {
    if (ls.get('characters', []).length > 0) {
      setCharacters(ls.get('characters', []));
    } else {
      getCharactersFromApi().then((initialData) => {
        setCharacters(initialData);
        ls.set('characters', initialData);
      });
    }
  }, []);

  const handleSearchInput = (ev) => {
    setSearchNameInput(ev.target.value);
  };

  return (
    <div className="page">
      <header className="header">
        <img className="header__image" src={headerLogo} alt="" />
        <form className="header__form" action="">
          <label className="header__form--label" htmlFor=""></label>
          <input
            className="header__form--input"
            type="text"
            placeholder="Buscar personaje"
            value={searchNameInput}
            onChange={handleSearchInput}
          />
        </form>
      </header>
      <main className="main">
        <section className="main__section">
          <CharactersList data={characters} />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
