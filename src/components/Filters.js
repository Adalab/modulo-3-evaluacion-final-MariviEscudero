import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import '../styles/Filters.scss';

const Filters = (props) => {
  return (
    <form className="main__form" action="">
      <FilterByName
        className={'main__form--input'}
        name={"name"}
        id={'name'}
        placeHolder={'buscar personaje'}
        value={props.inputValue}
        handleSearchInput={props.handleSearchInput}
      />
      <FilterBySpecie
        className={"main__form--select"}
        name={'specie'}
        id={'specie'}
        value={props.selectValue}
        handleSearchSpecie={props.handleSearchSpecie}
      />
    </form>
  );
};
export default Filters;
