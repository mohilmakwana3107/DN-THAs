import "./styles.css";

export default function App() {
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;

  function add1()
  {
    a++;
    console.log(a);
    document.getElementById("v1").innerHTML=a;
     
  }
  function add2()
  {
b++;
    console.log(b);
    document.getElementById("v2").innerHTML=b;
     
  }
  function add3()
  {
c++;
    console.log(c);
    document.getElementById("v3").innerHTML=c;
     
  }
  function add4()
  {
d++;
    console.log(d);
    document.getElementById("v4").innerHTML=d;
     
  }
    
  return (
    <div className="App">
      <button onClick={() => {add1();}}>
        <lable id="v1">0</lable>
      </button>

      <button onClick={() => {add2();}}>
        <lable id="v2">0</lable>
      </button>

      <button onClick={() => {add3();}}>
        <lable id="v3">0</lable>
      </button>

      <button onClick={() => {add4();}}>
        <lable id="v4">0</lable>
      </button>
    </div>
  );
}
