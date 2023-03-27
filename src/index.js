//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

// import bootstrap css resource
import "bootstrap/dist/css/bootstrap.css";
import Skill from './hook-form-practice/Skill';
import AxiosDemo from './ex12-axios/AxiosDemo';

const greetingMessage = <div>Hello React!</div>;

const menu = <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Contact Us</li>
    </ul>;

console.log(">>>> Hello React!");

//ReactDOM.render(menu,  document.getElementById('root')  );
const root = ReactDOM.createRoot(document.getElementById('root'));

const names = ["Mehrdad Javan", "Simon Elbrink", "Test Testsson"]; 
root.render(<AxiosDemo />);
