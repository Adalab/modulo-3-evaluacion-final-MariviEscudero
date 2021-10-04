import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';

const Filters = (props) => {
  return (
    <form className="main__form" action="">
      <FilterByName
        handleSearchInput={props.handleSearchInput}
      />
      <FilterBySpecie
        handleSearchSpecie={props.handleSearchSpecie}
      />
    </form>
  );
};
export default Filters;
