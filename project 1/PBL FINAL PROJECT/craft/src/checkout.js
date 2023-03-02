import React from 'react'
import './checkout.css'
import img from './godd.jpg'
import Subtotal from './Subtotal'
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct";

function checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout" >
        <div className="checkout__left">
            <img className="checkout__ad" src={img} alt=" " />
            <div>
                <h2 className="checkout_title">Your cart</h2>


                {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}


            </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
            
        </div>
    </div>
  )
}

export default checkout