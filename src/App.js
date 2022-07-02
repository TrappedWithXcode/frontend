import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Filtered from "./pages/Filtered";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/category/:id" element={<Filtered/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
