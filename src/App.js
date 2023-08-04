import "./App.css";
import Header from "./components/Layout/Header/Header";
import MainGrid from "./components/MainGrid/MainGrid";
import { Provider } from "react-redux";
import store from "./redux/store";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function App() {
  const [isItemAdded, setIsItemAdded] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <MainGrid setIsItemAdded={setIsItemAdded} />
        {isItemAdded && (
          <Alert severity="success" className="fixed z-20 w-full">
            Item added to cart
          </Alert>
        )}
      </div>
    </Provider>
  );
}

export default App;
