import { Link } from 'react-router-dom';
const CharacterDetail = (props) => {
  const statusIcon = () => {
    if (props.detailData.status === 'Alive') {
      return <spam>&#128522;</spam>;
    } else {
      return <spam>&#9760;</spam>;
    }
  };
  return (
    <section className="main__section--detail">
      <Link to="/">
        <i class="fas fa-times-circle icon"></i>
      </Link>
      <h2 className="main__section--detail__name">{props.detailData.name}</h2>
      <img
        className="main__section--detail__image"
        src={props.detailData.image}
        alt={props.detailData.name}
      />

      <ul>
       
        <li className="main__section--detail__data">
          Especie: {props.detailData.specie}
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
