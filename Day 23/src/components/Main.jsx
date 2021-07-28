import "./style.css";
import useToggle from "./useToggle";


function Main() {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <body>
      <button className="btn" onClick={setIsTextChanged}>
      {isTextChanged ? "Login" : "Logout"}
    </button>
    </body>
  );
}

export default Main;