import "./styles.css";
import Card from "./Component/Card";

export default function App(){
  // let foods = [ 
  //   { 
  //     foods : "Pizza",
  //     calories : "27",
  //   },
  //   { 
  //     foods : "Pizza",
  //     calories : "27",
  //   },
  //   { 
  //     foods : "Pizza",
  //     calories : "27",
  //   }
  // ];
  return (
    <div className="card-container">
    <Card name="Pizza" cal="65"/>
    <Card name="Burger" cal="40"/>
    <Card name="Taco Maxican" cal="50"/>
    <Card name="Samosa" cal="35"/>
    <Card name="Halwa" cal="55"/>
  </div>
  );
}
