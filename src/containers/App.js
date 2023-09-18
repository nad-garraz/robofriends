import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRobots } from '../slices/robotsSlice';
import { changeRoute } from '../slices/routeSlice.js';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import RoboProfile from '../components/RoboProfile';
// import Counter from '../components/Counter';

//TODO: Make the robots clickeable and open a new page or tab with all the info of
// the clicked robot that comes from the fetch command

function App() {
  // get the states from the store
  const robots = useSelector((state) => state.robots.robotsArray);
  const routeMap = useSelector((state) => state.routeMap);
  const searchField = useSelector((state) => state.searchField.value);
  // use dispatch to send the new state info to the store
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => dispatch(getRobots(users)))
      .catch((e) => console.log(e));
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return (
      robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
      robot.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // ⚠ ⚠ ⚠ Esta función la uso para modificar un estado en Cardlist. La razón
  // por la cual está acá y no en Cardlist.js es porque no puedo llamar
  // un HOOKE en un loop. Es por eso que de acá la paso como un prop y no hay problema.⚠ ⚠ ⚠
  function handleCardClick(routeMap) {
    dispatch(changeRoute(routeMap));
  }

  return !robots.length ? (
    <h1>Loading</h1>
  ) : routeMap.route === 'home' ? (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <CardList robots={filteredRobots} changeRoute={handleCardClick} />
      </Scroll>
    </div>
  ) : (
    <RoboProfile robots={robots} selectedRobot={routeMap.id} />
  );
}

export default App;
