import { Link } from 'react-router-dom';
const CharacterDetail = (props) => {
  const statusIcon = () => {
    if (props.detailData.status === 'Dead') {
      return <spam>&#128128;</spam>;
    } else {
      return "Sigue vivo";
    }
  };
  const specieIcon = () => {
    if (props.detailData.specie === 'Alien') {
      return <spam>&#128126;</spam>;
    } else {
      return "Humano o clon humano, quién sabe ya...";
    }
  };

  return (
    <section className="main__section--detail">
      <Link to="/">
        <i class="fas fa-times-circle icon"></i>
      </Link>

      <img
        className="main__section--detail__image"
        src={props.detailData.image}
        alt={props.detailData.name}
      />

      <ul className="main__section--detail__list">
        <li className="main__section--detail__name">{props.detailData.name}</li>
        <li className="main__section--detail__data">
          Especie: {specieIcon()}
        </li>
        <li className="main__section--detail__data">
          Planeta de origen: {props.detailData.origin}
        </li>
        <li className="main__section--detail__data">
          Aparece en la serie en {props.detailData.episodes} episodios
        </li>
        <li className="main__section--detail__data">
          Estado en este universo: {statusIcon()}
        </li>
      </ul>
    </section>
  );
};
export default CharacterDetail;
