function Card ({ name, email, id }) {
  return (
    <div className='robo-container'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div className='robo-info'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
