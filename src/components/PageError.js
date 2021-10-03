import {Link} from 'react-router-dom';
import errorImage from '../images/137b540a18c16c296b995a908ef6bb1c.jpg'
const PageError = (props)=>{
return(
    <section className="main__errorpage">
    <p>
      Malditos agujeros espacio-temporales! la página que buscas no
      existe en este universo...Prueba con otra dirección o ve a inicio
      <Link to='/'>
      <span> aquí</span> 
      </Link>
    </p>
  </section>
);
}
export default PageError;