import React from 'react'
import './Header.css'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import design from "./Untitled design.png";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider"
function Header() {
  const [{basket} , dispatch] = useStateValue();
  return (
    <div className="header">
      <Link
        to="/"
      >
        <img className="header__logo" src={design} alt="" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchRoundedIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineone"></span>
          <span className="header__optionlinetwo"></span>
        </div>
        <div className="header__option">
          
          <span className="header__optionlineone">Hello Guest !</span>
          <span className="header__optionlinetwo">
            <Link to="Login"> Sign in </Link>
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Return</span>
          <span className="header__optionlinetwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Your</span>
          <span className="header__optionlinetwo">Sellers</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />
            <span className="header__optionlinetwo header__basketcount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header
