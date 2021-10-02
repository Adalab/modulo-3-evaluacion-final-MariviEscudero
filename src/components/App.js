import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import ls from '../services/ls';
import headerLogo from '../images/Rick_and_Morty_-_logo_(English).png';
import '../styles/App.scss';
import CharactersList from './ContactList';



const App = () => {

  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  console.log(characters);

  useEffect(() => {
    if (ls.get('characters', []).length > 0) {
      console.log(ls.get('characters', []));
      setCharacters(ls.get('characters', []));
    } else {
      getCharactersFromApi().then((initialData) => {
        console.log(initialData);
        setCharacters(initialData);
        ls.set('characters', initialData);
      });
    }
  }, []);

  const handleSearchInput = (ev) => {
    setSearchInput(ev.target.value);
  };
 
  return (
    <div className="page">
      <header className="header">
        <img className="header__image" src={headerLogo} alt="" />
        <form className="main__form" action="">
          <label className="main__form--label" htmlFor=""></label>
          <input
            className="main__form--input"
            type="text"
            onChange={handleSearchInput}
          />
        </form>
      </header>
      <main className="main">
        <section className="main__section">
        <CharactersList data={characters}/>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
