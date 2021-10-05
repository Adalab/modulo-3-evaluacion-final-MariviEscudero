import '../styles/Header.scss';
import headerLogo from '../images/Rick_and_Morty_-_logo_(English).png';
const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__image" src={headerLogo} alt="Rick y Morty" />
        
      </header>
    </>
  );
};
export default Header;
