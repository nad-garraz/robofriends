import Card from "./Card";

function CardList ({ robots }) {
  // if (true) {
  //   throw new Error('AAAAAAAAAAAAAAAAAAAAAAAAAAA')
  // }
  return (
    <div>
      {robots.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
