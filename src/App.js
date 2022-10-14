import NavBar from "./Components/Layout/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import User from './Pages/User';
import ViewUsers from "./Pages/ViewUsers";


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
         <Route exact path="/" element={<User/>}></Route>
         <Route exact path="/Users" element={<ViewUsers/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
