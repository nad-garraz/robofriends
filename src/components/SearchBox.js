import { updateSearchField } from '../slices/searchFieldSlice';
import { useSelector, useDispatch } from 'react-redux';

function SearchBox() {
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
