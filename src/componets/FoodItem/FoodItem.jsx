/*             {!itemCount? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=""/>:<div className='food-item-counter'>
ЕСЛИ СЧЕТ НЕ БУДЕТ ТО ДОБАВЛЯЕТСЯ КАРТИНКА + И ПРИБАВЛЯЕТСЯ +1 А ЕСЛИ УЖЕ ЕСТЬ ЗНАЧИТ ПОЯВЛЯЕТСЯ ПУСТО ДИВ В КОТОРОМ ПЛЮС И МИНУС И ИМ ДЕЛАЕМ ФУНКЦИЮ ПРЕД +1 СООТ ДЛЯ ПЛЮСА
И ПРЕД. -1 СООТ ДЛЯ МИНУСА
                    <img onClick={()=> addToCart(id)} src={assets.remove_icon_red} alt=""/>
                    <p>{itemCount}</p>
                    <img onClick={()=> removeFromCart(id)} src={assets.add_icon_green} alt=""/>
</div>
                }     */


import React, {useContext} from "react";
import './FoodItem.css'
import {assets, food_list} from "../../assets/assets.js";
import {StoreContext} from "../../context/StoreContext.jsx";


const FoodItem = ({id, name, price, description, image}) => {



    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)


    return (

        <div className='food-item'  >
            <div className="food-item-img-container">
                <img src={image} className='food-item-image' alt=""/>
                {!cartItems[id]? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=""/>:<div className='food-item-counter'>

                    <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt=""/>
                </div>


                }
            </div>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>



        </div>
    )
}

export default FoodItem