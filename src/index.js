//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { store } from "./ex14-redux/store/configureStore";
// import bootstrap css resource
import "bootstrap/dist/css/bootstrap.css";
import Person from "./ex14-redux/components/Person";
import { Provider } from "react-redux";
import DemoRouter from "./workshop2/DemoRouter";
import DataTable from "./workshop1/DataTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DemoRouter />);
