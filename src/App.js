import "./App.css";
import Header from "./components/Layout/Header/Header";
import Counter from "./components/Counter/Counter";
import MainGrid from "./components/MainGrid/MainGrid";
function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <MainGrid />
    </div>
  );
}

export default App;
