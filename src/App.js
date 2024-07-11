import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import Orders from './pages/Orders/Orders';
import List from './pages/List/List';
import {Routes,Route} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainNavbar } from './components/Navbar/MainNavbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const url = "https://finalfoodbackend.vercel.app";
  return (
    <div>
      <ToastContainer />
      {/* <Navbar /> */}
      <MainNavbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/dash" element={<Dashboard url={url}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
