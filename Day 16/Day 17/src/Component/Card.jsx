import "./style.css";

const Card = ({ name, cal }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>You have consumed {cal} cal today</h2>
    </div>
  );
};

export default Card;