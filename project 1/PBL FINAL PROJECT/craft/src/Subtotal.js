import React, { Component }  from 'react';
import  "./Subtotal.css";

import CurrencyFormat from "react-currency-format";
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from "react-router-dom"


function Subtotal() {
    const navigate = useNavigate();
    

     const [{basket} , dispatch] = useStateValue();

    return(
        <div className="subtotals">
    
    <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => navigate('/payment')}>proceed to checkout</button>
      
        </div>
    )
    
}
export default Subtotal;