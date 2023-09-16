import { updateSearchField } from '../features/searchField/searchFieldSlice';
import { useSelector, useDispatch } from 'react-redux';


function SearchBox() {
  //Dispatch se encarga de mandar los cambios a 
  //la slice donde se modificará el state.
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateSearchField(event.target.value));
  }

  //La propiedad OnChange trigerea la acción con cada
  //input que se haga. 
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;

// https://youtu.be/fMiFnbufAP4
