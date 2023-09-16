import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice.js';

function Counter() {
  //get state. Value es la propiedad del estado counter.
  const count = useSelector((state) => state.counter.value);
  // "set" state. Manda la info del cambio que se le quiere hacer
  // a la store.
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{display: "inline-flex"}}>
        <button style={{width: "100px", fontSize: "100px"}} onClick={() => dispatch(increment())}>+</button>
        <h1>{count}</h1>
        <button style={{width: "100px", fontSize: "100px"}} onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default Counter;
