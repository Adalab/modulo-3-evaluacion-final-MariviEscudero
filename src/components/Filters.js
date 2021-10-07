import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import '../styles/Filters.scss';

const Filters = (props) => {
  return (
    <form className="main__form">
      <FilterByName
        className={'main__form--input'}
        inputName={'name'}
        id={'name'}
        placeHolder={'buscar personaje'}
        value={props.inputValue}
        handleSearchInput={props.handleSearchInput}
      />
      <FilterBySpecie
        className={'main__form--select'}
        name={'specie'}
        id={'specie'}
        value={props.selectValue}
        handleSearchSpecie={props.handleSearchSpecie}
      />
       <FilterByName
        className={'main__form--input'}
        inputName={'chapters'}
        id={'chapters'}
        placeHolder={'buscar por numero de capitulos'}
        value={props.chapterValue}
        handleSearchInput={props.handleSearchChapter}
      />
    </form>
  );
};
export default Filters;
