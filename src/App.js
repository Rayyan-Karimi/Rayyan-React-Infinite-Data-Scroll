import "./App.css";
import InfiniteScroll from "./InfiniteScroll";

function Hero() {
  return (
    <div className="py-6 text-center shadow-lg">
      <h2>INFINIITE SCROLL</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hero />
      <InfiniteScroll />
    </div>
  );
}

export default App;
