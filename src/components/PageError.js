import {Link} from 'react-router-dom';
import '../styles/PageError.scss';
const PageError = (props)=>{
return(
    <section className="main__errorpage">
    <p>
      Malditos agujeros espacio-temporales! la página que buscas no
      existe en este universo...Prueba con otra dirección o ve a inicio
      <Link to='/'>
      <span className="main__errorpage--span"> aquí</span>
      </Link>
    </p>
  </section>
);
}
export default PageError;