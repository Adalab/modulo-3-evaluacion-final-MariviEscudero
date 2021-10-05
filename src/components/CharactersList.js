import '../styles/CharacterList.scss';
import CharacterItem from './CharacterItem';
const CharactersList = (props) => {
  const character = props.data
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((characterData) => (
      <li key={characterData.id} className="main__section--list__item">
        <CharacterItem characterData={characterData} />
      </li>
    ));

  if (character.length) {
    return <ul className="main__section--list">{character}</ul>;
  } else {
    return <p className="main__section--charactererror">Personaje no encontrado en esta dimensión...</p>;
  }
};
export default CharactersList;
