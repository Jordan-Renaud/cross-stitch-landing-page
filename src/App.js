import { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  //functionality to switch dark and light modes
  function handleModeSwitch(event) {
    if (mode === "light") {
      setMode("dark");
    } else if (mode === "dark") {
      setMode("light");
    }
  }

  return (
    <div className={`App ${mode}`}>
      <div className="mode-switch">
        <label className="switch">
          <input type="checkbox" onChange={handleModeSwitch} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="dark-flowers"></div>
      <div className="background"></div>

      <div className="circle">
        <div className="stitches">
          <h1>Stitch Itch</h1>
          <h2>It's like tinder for cross stitch.</h2>
          <h3>You know you want to scratch</h3>
          <p>Register your interest now:</p>

          <form className="email-form">
            <label>
              <input
                className="text-input"
                type="email"
                email="email"
                placeholder="email..."
              />
            </label>
            <input className="button" type="submit" value="scratch" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
