import Card from './Card';
function CardList({ robots, changeRoute }) {
  return (
    <div>
      {robots.map((user) => {
        const openRobot = {
          route: 'card',
          id: user.id,
        };
        return (
          <div className='dib tc w5 h-200 grow bg-light-green br3 pa3 ma2 bw2 shadow-5' key={user.id} onClick={() => changeRoute(openRobot)}>
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        </div>
        );
      })}
    </div>
  );
}

export default CardList;
