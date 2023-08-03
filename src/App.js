import "./App.css";
import Header from "./components/Layout/Header/Header";
import MainGrid from "./components/MainGrid/MainGrid";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainGrid />
      </div>
    </Provider>
  );
}

export default App;
