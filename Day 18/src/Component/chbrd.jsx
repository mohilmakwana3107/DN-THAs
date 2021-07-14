import "./chbrd.style.css";
import EvRows from "./rows/ev_row"
import OdRows from "./rows/od_row"


const chbrd = () => {
  const row = [];

  for (let i = 0; i<8; i++) {
    i % 2 === 0
      ? row.push(<EvRows />)
      : row.push(<OdRows />);
  }
  return row;
};

export default chbrd;
