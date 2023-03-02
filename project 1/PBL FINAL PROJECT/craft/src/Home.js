import React from 'react'
import './Home.css'
import img from './homeimgf.jpg'
import Product from './product';



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={img} alt="" />

        <div className="home__row">
          <Product
            id="12321341"
            title="Tholu Bommalata, Leather Puppets -
ANDHRA PRADESH"
            price={200}
            rating={4}
            image ="puppet.jpg"
          />
          <Product
            id="49538094"
            title="Mojari - RAJASTHAN"
            price={30}
            rating={4}
            image="shoes.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Panja Dhurrie
RAJASTHAN | Punjab |"
            price={40}
            rating={3}
            image="bell.jpg"
          />
          <Product
            id="23445930"
            title="Nettur Petti -
KERALA"
            price={50}
            rating={5}
            image="box.jpg"
          />
          <Product
            id="3254354345"
            title="Paper Mache Mask -
Raghurajpur"
            price={60}
            rating={4}
            image="mask.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Benaras Wood Carving -
BENARAS, UTTAR PRADESH"
            price={409}
            rating={4}
            image="god.png"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Home;