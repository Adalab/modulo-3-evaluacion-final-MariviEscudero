import '../styles/CharacterItem.scss';
import {Link} from 'react-router-dom';
const CharacterItem = (props) => {
  
  return (
    <>
    <Link to={`/characterDetail/${props.characterData.id}`}>
      <img
        className="main__section--list__item--image"
        src={props.characterData.image}
        alt={props.characterData.name}
      />
      <h1 className="main__section--list__item--name">
        {props.characterData.name}
      </h1>
      <p className="main__section--list__item--specie">
        Especie: {props.characterData.specie}
      </p>
      </Link>
    </>
  );
};
export default CharacterItem;
