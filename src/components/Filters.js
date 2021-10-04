import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import '../styles/Filters.scss';

const Filters = (props) => {
  return (
    <form className="main__form" action="">
      <FilterByName
        handleSearchInput={props.handleSearchInput}
        inputValue={props.value}
      />
      <FilterBySpecie
        handleSearchSpecie={props.handleSearchSpecie}
      />
    </form>
  );
};
export default Filters;
