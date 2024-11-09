/*        {food_list.map((item, index)=>{
                    if (category==='All' || category===item.category){   ПЕРЕД ТЕМ МЫ ВСЕ ЗНАЧЕНЕ МЕНЯЕМ НА АЙДИ И ТЕПЕРЬ ЕСЛИ КАТЕГОРИЯ РАВНА ВСЯ ТО ВЫВОДИМ ВСЮ ЕСЛИ НЕТ ТО ПО КАТЕГОРИИ
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}  />
                    }
                    })}*/



import React, {useContext} from "react";
import './FoodDisplay.css'
import {StoreContext} from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = ({category}) => {


    const {food_list } = useContext(StoreContext)

    return (

        <div className='food-display' id='food-display' >
            <h2>Lorem ipsum dolor sit amet.</h2>
            <div className='food-display-list'>
                {food_list.map((item, index)=>{
                    if (category==='All' || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}  />
                    }
                    })}

            </div>


        </div>
    )
}

export default FoodDisplay