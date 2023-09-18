import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import AboutOne from "./pages/About/AboutOne";
import Burger from "./components/Burger/burger";
import {useState} from "react";
import DetailHome from "./pages/DetailHome/detailHome";

function App() {

    const [burger,setBurger] = useState(false)

  return (
      <div className='App' translate='no'>
          <Header setBurger={setBurger} burger={burger}/>
          <Burger setBurger={setBurger} burger={burger}/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<AboutOne/>}/>
              <Route path={'/detail/:id'} element={<DetailHome/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
