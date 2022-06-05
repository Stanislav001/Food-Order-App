import { useState, useContext } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import MyCart from "./UI/MyCart/MyCart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [myCartIsShow, setMyCartIsShow] = useState(false);

  const showMyCartHandler = () => {
    setMyCartIsShow(true);
  }

  const hideMyCartHandler = () => {
    setMyCartIsShow(false);
  }

  return (
    <CartProvider>
      {myCartIsShow && <MyCart onClose={hideMyCartHandler} />} // if true this is rendering
      <Header onClickMyCart={showMyCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
