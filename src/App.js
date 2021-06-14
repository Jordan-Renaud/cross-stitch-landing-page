import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="circle">
          <div className="stitches">
            <h1>Stitch Itch</h1>
            <h2>It's like tinder for cross stitch.</h2>
            <h3>You know you want to scratch</h3>
            <p>Register your interest now:</p>

            <form className="email-form">
              <label>
                <input className="text-input" type="email" email="email" />
              </label>
              <input className="button" type="submit" value="scratch" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
