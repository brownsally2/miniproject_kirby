import './App.css';
import Login from '../src/kirby/Login';
import SignupS1 from '../src/kirby/Signup';
import GoHome from './home/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SignupS2 from './cuby/Signup';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignupS1" element={<SignupS1 />} />
            <Route path="/Home" element={<GoHome />} />
        </Routes>
      </Router>
  );
}

export default App;
