import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
/*import {useStripe, useElements, CardElements} from '@stripe/react-stripe-js';*/
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    /*const stripe = useStripe();
    const elements = useElements();*/
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <Link to="/checkout">{basket.length} items </Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div classname="Payment__address">
            <p>Pune Institute of computer Technology</p>
            <p>Dhankawadi,41104</p>
            <p>Pune</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payemnt__items">
            {basket.map((item) => (
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment meythod</h3>
          </div>
          <div className="payment__details">
            <form>
              <label>
                Cash on Delivery(COD) : <input type="checkbox" />
              </label>
              </form>
              <label>
                Net Banking : <input type="checkbox" />
              </label>
              <form>
              <label>
                Credit/Debit Card : <input type="checkbox" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment