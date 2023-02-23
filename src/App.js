import { useState } from "react";
import Clock from "./Clock";

function App() {

  const [color, setColor] = useState("linear-gradient(to top, #000428, #004e92)")

  return (
    <div className="main-container" style={{background: color}}>
      <h1>Hora Local:</h1>
      <label>Tema:</label>
      <select style={color === "linear-gradient(to top, #8e0e00, #1f1c18)" ? {backgroundColor: "#450801"} : {backgroundColor: "#190933"}} onChange={(e) => setColor(e.target.value)}>
        <option value="linear-gradient(to top, #000428, #004e92)">default</option>
        <option value="linear-gradient(to top, #0b486b, #f56217)">1</option>
        <option value="linear-gradient(to top, #16bffd, #cb3066)">2</option>
        <option value="linear-gradient(to top, #8e0e00, #1f1c18)">3</option>
      </select>

      <Clock color={color}></Clock>

      <a href="https://github.com/fraancofenoglio"> by Franco Fenoglio</a>
    </div>
  );
}

export default App;
