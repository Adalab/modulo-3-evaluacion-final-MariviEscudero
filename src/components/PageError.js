import { Link } from 'react-router-dom';
import '../styles/PageError.scss';
const PageError = () => {
  return (
    <section className="main__errorpage">
      <p>
        Wubba Lubba Dub Dub!!! la página que buscas no existe en este
        universo...Prueba con otra dirección o ve a inicio
        <Link to="/">
          <span className="main__errorpage--span"> aquí</span>
        </Link>
      </p>
    </section>
  );
};
export default PageError;
