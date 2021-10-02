const CharactersList = (props) => {
  const character = props.data
  .sort(function (a,b){
      if(a.name > b.name){
          return 1;
      }else{
          return -1;
      }
  })
  .map((characterData, index) => (
    <li key={index} className="main__section--list__item">
      <img className="main__section--list__item--image" src={characterData.image} alt={characterData.name} />
      <h1 className="main__section--list__item--name">{characterData.name}</h1>
      <p className="main__section--list__item--specie" >Especie: {characterData.specie}</p>
    </li>
  ));

  return <ul className="main__section--list">{character}</ul>;
};
export default CharactersList;
