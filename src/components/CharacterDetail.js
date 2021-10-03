import { Link } from 'react-router-dom';
const CharacterDetail = (props) => {
  return (
    <section className="main__section--detail">
      <Link to='/'>
        <i className="fas fa-backspace icon"></i>
      </Link>

      <img
        className="main__section--detail__image"
        src={props.detailData.image}
        alt={props.detailData.name}
      />
      <ul>
        <li className="main__section--detail__name">{props.detailData.name}</li>
        <li className="main__section--detail__specie">
          Especie: {props.detailData.specie}
        </li>
        <li className="main__section--detail__origin">
          Planeta de origen: {props.detailData.origin}
        </li>
        <li>Aparece en la serie en {props.detailData.episodes} episodios</li>
        <li>Estado en este universo: {props.detailData.status}</li>
      </ul>
    </section>
  );
};
export default CharacterDetail;
