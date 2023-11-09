import "./Card.css";
import cardArt from "./card-art.png"
export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front" style={{backgroundImage: `url(${props.art})`}}>
          <div className="card-power">{props.power}</div>
          <div className="card-name">{props.name}</div>
        </div>
        <div className="card-back" style={{backgroundImage: `url(${props.backface})`}}>
          <p className="card-story">{props.story}</p>
        </div>
      </div>
    </div>
  )
}