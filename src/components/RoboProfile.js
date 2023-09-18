import { useDispatch } from 'react-redux';
import { changeRoute } from '../slices/routeSlice';
import { resetSearchField } from '../slices/searchFieldSlice';


function RoboProfile({ robots, selectedRobot }) {
  const dispatch = useDispatch();
  const userId = selectedRobot;
  const robot = robots.filter(robot => robot.id === userId)[0];

  //Esta función se encarga de printear la información del
  //objeto robot, Dado que tiene objetos nesteados,
  //{a: aa, b: {...}} cosas así se le complican al map cuando
  //el value es un objeto.
  function renderPropertiesValue(roboObject) {
    return Object.entries(roboObject).map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return (
          <li key={key}>
            <strong>{key}</strong>:
            <ul> {renderPropertiesValue(value)}</ul>
          </li>
        );
      } else {
        return (
          <li key={key}> <strong>{key}</strong>: {value} </li>
        );
      }
    });
  }

  function goBack(){
    dispatch(resetSearchField()); // así renderea todos los robots
    dispatch(changeRoute({route: 'home'}))
  }

  return (
    <>
      <div className="flex">
        <h1 className="w-10 grow items-center pointer" onClick={() => goBack()}>⬅</h1>
        <h1 className="f1 tc">{robot.name}</h1>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        <img alt="robots" src={`https://robohash.org/${userId}?size=500x500`} />
        <div className="tl w5 h-200 grow bg-light-green br3 pa3 ma2 bw2 shadow-5">
          <ul>{renderPropertiesValue(robot)}</ul>
        </div>
      </div>
    </>
  );
}

export default RoboProfile;
