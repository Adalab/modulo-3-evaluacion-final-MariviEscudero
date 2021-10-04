import '../styles/FilterByName.scss';
const CharacterFilter = (props) =>{
    const filterCharacter = (ev)=>{
      ev.preventDefault();
        props.handleSearchInput(ev.currentTarget.value)
    }
    return(
       <div>
          <label className="main__form--label" htmlFor="name">Nombre</label>
          <input
            className="main__form--input"
            type="text"
            placeholder="Buscar personaje"
            value={props.value}
            onChange={filterCharacter}
          />
        </div>
    );
}
export default CharacterFilter;