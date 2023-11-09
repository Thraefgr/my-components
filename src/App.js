import './App.css';
import cardArt from "./card-art.png"

function App() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <div className="card-power">10</div>
          <div className="card-name">First of The Cards</div>
        </div>
        <div className="card-back">
          <p className="card-story">Once upon a time there was a wicked card...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
