const CharacterFilter = (props) =>{
    const filterCharacter = (ev)=>{
      ev.preventDefault();
        props.handleSearchInput(ev.currentTarget.value)
    }
    return(
        <form className="main__form" action="">
          <label className="main__form--label" htmlFor=""></label>
          <input
            className="main__form--input"
            type="text"
            placeholder="Buscar personaje"
            value={props.value}
            onChange={filterCharacter}
          />
        </form>
    );
}
export default CharacterFilter;