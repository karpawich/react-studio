import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

   const [cart, setCart] = useState({})

   function addToCart(item) {
    const newCart = {...cart};
    if (typeof newCart[item.name] !== 'undefined') {
      newCart[item.name].i += 1;
    } else {
      newCart[item.name] = {
        i: 1,
        price: item.price,
      }
    }
    setCart(newCart);
   }

   let totalCount = 0;
   Object.keys(cart).forEach((key) => {
    totalCount += cart[key].price
   })

  return (
    <div className="App">
      <div>
        <h1>My Bakery</h1>

        {bakeryData.map((item, index) => (
          <BakeryItem item={item} key={index} onButtonClick={addToCart}/>
        ))}
      </div>
      <div style={{marginLeft: '50px'}}>
        <h2>Cart</h2>
        {Object.keys(cart).map((key, index) => {
          const count = cart[key].i;
          return (
            <p>x{count} {key}</p>
          )
        })}
        <h2>Total cost: ${totalCount}</h2>
      </div>
    </div>
  );
}

export default App;
