import "./Card.css";
import Rating from "./Rating.jsx";

function Card({ data }) {
  return data.map((e) => {
    return (
      <div className="card">
        <img src={e.src} alt="" />
        <div className="detail">
          <span className="title">{e.title}</span>
          <span className="company">{e.company}</span>
          <Rating data={e.rating} />
          <button className="install">
            <div className="border"></div>INSTALL APP
          </button>
        </div>
      </div>
    );
  });
}
export default Card;
