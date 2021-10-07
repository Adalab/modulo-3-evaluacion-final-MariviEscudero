import '../styles/CharacterDetail.scss';
import { Link } from 'react-router-dom';
const CharacterDetail = (props) => {
  const statusIcon = () => {
    if (props.detailData.status === 'Dead') {
      return <span> &#128128; </span>;
    } else {
      return 'Sigue vivo';
    }
  };
  const specieIcon = () => {
    if (props.detailData.specie === 'Alien') {
      return <span> &#128126; </span>;
    } else {
      return 'Humano o clon humano, quién sabe ya...';
    }
  };

  if (props.detailData === undefined) {
   return <p>Un momento, que ya casi está....</p>;
  } else
    return (
      <section className="main__section--detail">
        <Link to="/">
          <p className="link">Volver</p>
        </Link>

        <img
          className="main__section--detail__image"
          src={props.detailData.image}
          alt={props.detailData.name}
        />

        <ul className="main__section--detail__list">
          <li className="main__section--detail__name">
            {props.detailData.name}
          </li>
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
