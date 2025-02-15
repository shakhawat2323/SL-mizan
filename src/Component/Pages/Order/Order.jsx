import { useState } from "react";
import Menucover from "../Menu/Menucover";
import ORderpage from "./../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Usemenu from "../../../Hooks/Usemenu";
import Foodcard from "../Foodcard/Foodcard";
import Ordertab from "../Foodcard/Ordertab";
import { useParams } from "react-router-dom";

const Order = () => {
  const { category } = useParams();
  const Categorys = ["salad", "pizza", "soup", "desserts", "drinks"];
  const initaile = Categorys.indexOf(category);
  const [tabindex, setTabindex] = useState(initaile);
  console.log(tabindex);
  const [Menu] = Usemenu();

  console.log(category);
  const drinks = Menu.filter((items) => items.category === "drinks");
  const desserts = Menu.filter((items) => items.category === "desserts");
  const soup = Menu.filter((items) => items.category === "soups");
  const pizza = Menu.filter((items) => items.category === "pizza");

  const salad = Menu.filter((items) => items.category === "salad");

  return (
    <div>
      <Menucover Img={ORderpage} Titile="order food"></Menucover>
      <div className=" text-center">
        <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
          <TabList className="text-xl font-bold space-x-5">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel className="mt-3 w-11/12 mx-auto">
            <Ordertab items={salad}></Ordertab>
          </TabPanel>
          <TabPanel className="mt-3 w-11/12 mx-auto">
            <Ordertab items={pizza}></Ordertab>
          </TabPanel>
          <TabPanel className="mt-3 w-11/12 mx-auto">
            <Ordertab items={soup}></Ordertab>
          </TabPanel>
          <TabPanel className="mt-3 w-11/12 mx-auto">
            <Ordertab items={desserts}></Ordertab>
          </TabPanel>
          <TabPanel className="mt-3 w-11/12 mx-auto">
            <Ordertab items={drinks}></Ordertab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
