import { useState } from "react";
import logo from "../img/LogoMarioSalazar.gif";
import "../App.css";
import "../css/home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <div>
        <a href="#" target="_blank">
          <img src={logo} className="logo react lg-m" alt="React logo" />
        </a>
      </div>
      <h1>The website is under development by Mario Salazar</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;
