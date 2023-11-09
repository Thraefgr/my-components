import './App.css';
import cardArt from "./card-art.png"
import cardBackface from "./card-backface.png"
import Card from "./Card"

function App() {
  return (
    <Card art={cardArt} name="First of The Cards" power="10" backface={cardBackface} story="Once upon a time there was a wicked card..." />
  );
}

export default App;
