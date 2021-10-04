function FilterBySpecie(props) {
    const handleSearchSpecie = (ev)=>{
        props.handleSearchSpecie(ev.target.value);
    }
   
    return (
      <>
        <label className='form__label display-block' htmlFor='gender'>
          Especie:
        </label>
        <select
          className='form__input-text'
          name='gender'
          id='gender'
          value={props.searchSpecie}
          onChange={handleSearchSpecie}
        >
          <option value='all'>Todos</option>
          <option value='Human'>Humano</option>
          <option value='Alien'>Alien</option>
        </select>
      </>
    );
  }
  
  export default FilterBySpecie;