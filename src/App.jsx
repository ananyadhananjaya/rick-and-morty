import { LandingPage } from "./components/LandingPage/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Character from "./components/Characters/Characters";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} /> 
        <Route path="/character/:id" element={<Character />} /> 
      </Routes>
    </Router>
  );
}

export default App;
