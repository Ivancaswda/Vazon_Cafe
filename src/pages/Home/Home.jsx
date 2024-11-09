import React, {useState} from "react";
import './Home.css'
import Header from "../../componets/Header/Header.jsx";
import ExploreMenu from "../../componets/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../componets/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../componets/AppDownload/AppDownload.jsx";

const Home = () => {

    const [category, setCategory] = useState('All')



    return (

        <div >

            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}   />
            <FoodDisplay category={category}/>
            <AppDownload/>

        </div>
    )
}

export default Home