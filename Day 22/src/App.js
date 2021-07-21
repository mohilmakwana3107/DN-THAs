import { useState, useEffect } from "react";
import "./styles.css";
import Template from "./Component/Templates";
import Meme from "./Component/Meme"

export default function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setTemplates(data.data.memes));
  }, []);
  console.log(templates);

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <Template templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}