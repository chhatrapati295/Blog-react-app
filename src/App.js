import Topbar from "./components/topbar/Topbar";
import Register from './pages/home/register/Register'
import Login from "./pages/home/login/Login";
import Create from "./pages/home/create/Create";
import Settings from "./pages/home/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  const user =false;
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/single" element={<Single />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={user ? <Home/> : <Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
