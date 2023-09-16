import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {getRobots } from '../features/robots/robotsSlice'

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import Counter from '../components/Counter';



function App() {
  // get the state
const robots = useSelector(state => state.robots.robotsArray)
  // use dispatch to send the new state info to the store
const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => dispatch(getRobots(users)))
      .catch((e) => console.log(e));
  }, []);

  //Consigo el estado global de la store. El "searchField.value"
  //tiene "searchField -> name de searchFieldSlice"
  //y "value" -> es la key de la única propiedad que tiene el initialState.
  const searchField = useSelector((state) => state.searchField.value);

  const filteredRobots = robots.filter((robot) => {
    return (
      robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
      robot.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
