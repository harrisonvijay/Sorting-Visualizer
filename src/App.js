import SortingVisualizer from "./components/SortingVisualizer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <SortingVisualizer />
      </div>
      <div className="overlay">
        <span>This app is only supported in displays with width greater than 900px</span>
      </div>
    </>
  );
}

export default App;