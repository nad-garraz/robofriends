import Card from './Card';

function CardList({ robots, changeRoute }) {
  return (
    <>
      {robots.map((user) => {
        const selectedRobot = {
          route: 'card',
          id: user.id,
        };

        return (
          <div
            className="dib tc w5 h-200 grow bg-light-green br3 pa3 ma2 bw2 shadow-5"
            key={user.id}
            onClick={() => changeRoute(selectedRobot)}
          >
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          </div>
        );
      })}
    </>
  );
}

export default CardList;
