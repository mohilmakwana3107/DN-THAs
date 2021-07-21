import "./styles.css";
import { useState } from "react";
import Cards from "./Component/components.cards";
export default function App() {
  const [data, setData] = useState([
    {
      id: 0,
      calory: 56,
      food: "Pizza"
    },
    {
      id: 1,
      calory: 69,
      food: "Burger"
    },
    {
      id: 2,
      calory: 350,
      food: "Hyderabadi biriyani"
    },
    {
      id: 3,
      calory: 580,
      food: "Jalebi"
    },
    {
      id: 4,
      calory: 150,
      food: "Pani-Puri"
    },
    {
      id: 5,
      calory: 200,
      food: "Masala Dosa"
    }
  ]);
  return (
    <div className="App">
      <h1>Calories....</h1>

      <div className="cal-app-container">
        {data.length ? (
          data.map(({ calory, food, id }) => (
            <Cards
              key={id}
              calory={calory}
              data={data}
              setData={setData}
              food={food}
              id={id}
            />
          ))
        ) : (
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            There is no data entry.....
          </h1>
        )}
      </div>
    </div>
  );
}
