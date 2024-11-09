/*     const [showLogin, setShowLogin] = useState(false)  СОЗДАЕМ ИЗНАЧАЛЬНО ДВЕ ФУНКЦИИ



    return (


<>
    {showLogin?<LoginPopup setShowLogin={setShowLogin()}/>:<></>} ВЫПУСКАЕМ ЕЕ В ЛОГИНПОПАП ЕСЛИ ТРУ ЕСЛИ ФОЛС ТО НИЧЕГО
            <div className='app'>
                <Navbar setShowLogin={setShowLogin}/> ДОБАВЛЯЕМ В НАВБАР ОБЪЕКТ
                */


import React, {useState} from "react";
import Navbar from "./componets/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import LoginPopup from "./componets/LoginPopup/LoginPopup.jsx";



const App = () => {

    const [showLogin, setShowLogin] = useState(false)



    return (


<>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/order' element={<PlaceOrder/>}/>
                </Routes>
        </div>
        <Footer/>
</>
    )
}

export default App