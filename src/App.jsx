import Card from "./Card.jsx";
import "./App.css";

const data = [
  {
    src: "https://picsum.photos/100?random=1",
    title: "30 Day Fit Challenege Workout",
    company: "NorthPoint Android",
    rating: 3,
  },
  {
    src: "https://picsum.photos/100?random=2",
    title: "S Health",
    company: "Samsung Electronics",
    rating: 4,
  },
  {
    src: "https://picsum.photos/100?random=3",
    title: "Crab War",
    company: "Appxplore",
    rating: 5,
  },
  {
    src: "https://picsum.photos/100?random=4",
    title: "Netflix",
    company: "Netflix Inc",
    rating: 5,
  },
  {
    src: "https://picsum.photos/100?random=5",
    title: "Jellyfish Hola 3D Theme",
    company: "Holaverse",
    rating: 3,
  },
  {
    src: "https://picsum.photos/100?random=6",
    title: "Sandstorm: Pirate Wars",
    company: "Ubisoft Entertainment",
    rating: 1,
  },
  {
    src: "https://picsum.photos/100?random=7",
    title: "Qatar Airways",
    company: "Qatar Airways",
    rating: 4,
  },
  {
    src: "https://picsum.photos/100?random=8",
    title: "Microsoft Word",
    company: "Microsoft Corporations",
    rating: 5,
  },
  {
    src: "https://picsum.photos/100?random=9",
    title: "Fruit Ninja Free",
    company: "Halfbrick Studios",
    rating: 2,
  },
];

function App() {
  return (
    <div className="main">
      <div className="box">
        <h1>Recommended for you</h1>
        <span>based on your installs</span>
        <div className="list">
          <Card data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
