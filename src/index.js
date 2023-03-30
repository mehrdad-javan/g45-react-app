//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { store } from "./ex14-redux/store/configureStore";
// import bootstrap css resource
import "bootstrap/dist/css/bootstrap.css";
import Person from "./ex14-redux/components/Person";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Person />
  </Provider>
);
