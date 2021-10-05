import '../styles/FilterBySpecie.scss';

function FilterBySpecie(props) {
    const handleSearchSpecie = (ev)=>{
        props.handleSearchSpecie(ev.target.value);
    }
   
    return (
      <div className="display">
        <label className="main__form--label" htmlFor={props.name}>
          Especie </label>
        <select
          className={props.className}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={handleSearchSpecie}
        >
          <option value='all'>Todos</option>
          <option value='Human'>Humano</option>
          <option value='Alien'>Alien</option>
        </select>
      </div>
    );
  }
  
  export default FilterBySpecie;