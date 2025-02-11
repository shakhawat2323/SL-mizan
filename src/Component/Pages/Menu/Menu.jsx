import React from "react";
import { Helmet } from "react-helmet-async";
import Menucover from "./Menucover";
import Coverimg from "../../../assets/menu/banner3.jpg";
import Dessert from "../../../assets/menu/dessert-bg.jpeg";
import Pizzas from "../../../assets/menu/pizza-bg.jpg";
import Salad from "../../../assets/menu/salad-bg.jpg";
import SOUPS from "../../../assets/menu/soup-bg.jpg";

import SectionTitile from "../../Home/SectionTitile";
import Usemenu from "../../../Hooks/Usemenu";
import Menucatagory from "./Menucatagory";
const Menu = () => {
  const [Menu] = Usemenu();

  const offered = Menu.filter((items) => items.category === "offered");
  const desserts = Menu.filter((items) => items.category === "dessert");
  const soup = Menu.filter((items) => items.category === "soup");
  const pizza = Menu.filter((items) => items.category === "pizza");

  const salad = Menu.filter((items) => items.category === "salad");
  return (
    <div>
      <Helmet>
        <title>SL-Mizan | Our Menu</title>
      </Helmet>
      <Menucover Img={Coverimg} Titile="Our Menu"></Menucover>
      <SectionTitile
        subHading="Don't miss"
        hading="TODAY'S OFFER"
      ></SectionTitile>
      {/* offered menu items */}
      <Menucatagory item={offered}></Menucatagory>
      {/* dessert menu items */}
      <Menucatagory
        item={desserts}
        img={Dessert}
        Titile=" DESSERTS"
      ></Menucatagory>
      {/* Pizzas menu items */}
      <Menucatagory item={pizza} img={Pizzas} Titile=" PIZZA"></Menucatagory>
      {/* SALADS menu items */}
      <Menucatagory item={salad} img={Salad} Titile=" SALADS"></Menucatagory>
      {/* SALADS menu items */}
      <Menucatagory item={soup} img={SOUPS} Titile=" SOUPS"></Menucatagory>
      {/* SALADS menu items */}
    </div>
  );
};

export default Menu;
