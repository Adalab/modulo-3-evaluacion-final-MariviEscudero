const CharacterItem = (props) => {
  return (
    <>
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
    </>
  );
};
export default CharacterItem;
