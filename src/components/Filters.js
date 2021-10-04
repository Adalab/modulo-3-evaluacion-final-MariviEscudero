import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import '../styles/Filters.scss';

const Filters = (props) => {
  return (
    <form className="main__form" action="">
      <FilterByName
        handleSearchInput={props.handleSearchInput}
        value={props.inputValue}
      />
      <FilterBySpecie
        handleSearchSpecie={props.handleSearchSpecie}
        value={props.selectValue}
      />
    </form>
  );
};
export default Filters;
