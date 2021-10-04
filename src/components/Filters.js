import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';

const Filters = (props) => {
  return (
    <>
      <FilterByName
        handleSearchInput={props.handleSearchInput}
      />
      <FilterBySpecie
        handleSearchSpecie={props.handleSearchSpecie}
      />
    </>
  );
};
export default Filters;
