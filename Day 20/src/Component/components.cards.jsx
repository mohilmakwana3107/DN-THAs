import "./component.cards.css"

export default function Cards({ calory, food, id, setData, data }) {
  const deleteEle = (e) => {
    const modifiedData = data.filter((ele) => ele.id !== id);
    setData([...modifiedData]);
  };
  return (
    <div className="Card">
      <div className="action">
        <h1>{food}</h1>
        <h4>{calory}</h4>
        <button onClick={deleteEle}>Delete</button>
      </div>
    </div>
  );
}
