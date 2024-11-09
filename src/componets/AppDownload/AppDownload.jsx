import React  from "react";
import './AppDownload.css'
import {assets} from "../../assets/assets.js";

const AppDownload = () => {
    return (

        <div className='app-download' id='app-download' >
            <p>Lorem ipsum dolor sit amet. <br/> 2315215215 </p>
            <div className='app-download-platforms'>
                <img src={assets.play_store} alt=""/>
                <img src={assets.app_store} alt=""/>
            </div>

        </div>
    )
}

export default AppDownload