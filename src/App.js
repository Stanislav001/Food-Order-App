import { useState } from "react";

import MyCart from "./UI/MyCart/MyCart";
import Meals from "./components/Meals/Meals";
import Header from "./components/Header/Header";
import MainNavigation from "./components/Header/MainNavigation/MainNavigation";

export default function App() {
  const [myCartIsShow, setMyCartIsShow] = useState(false);

  const showMyCartHandler = () => {
    setMyCartIsShow(true);
  }

  const hideMyCartHandler = () => {
    setMyCartIsShow(false);
  }

  return (
    <>
      <MainNavigation />

      {myCartIsShow && <MyCart onClose={hideMyCartHandler} />}
      <Header onClickMyCart={showMyCartHandler} />

      <main>
        <Meals />
      </main>
    </>
  );
}