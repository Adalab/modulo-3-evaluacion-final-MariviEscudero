import '../styles/FilterByName.scss';
const FilterByName = (props) => {
  const filterCharacter = (ev) => {
    ev.preventDefault();
    props.handleSearchInput(ev.currentTarget.value);
  };
  return (
    <div>
      <label className="main__form--label" htmlFor={props.name}>
        Nombre
      </label>
      <input
        className={props.className}
        name={props.inputName}
        id={props.id}
        placeholder={props.placeHolder}
        value={props.value}
        onChange={filterCharacter}
      />
    </div>
  );
};
FilterByName.defaultProps = {
  inputType: 'text',
  require: false,
};
export default FilterByName;
