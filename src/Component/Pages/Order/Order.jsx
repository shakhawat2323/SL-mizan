import { useState } from "react";
import Menucover from "../Menu/Menucover";
import ORderpage from "./../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Usemenu from "../../../Hooks/Usemenu";
import Foodcard from "../Foodcard/Foodcard";

const Order = () => {
  const [tabindex, setTabindex] = useState(0);
  const [Menu] = Usemenu();
  const offered = Menu.filter((items) => items.category === "offered");
  const desserts = Menu.filter((items) => items.category === "dessert");
  const soup = Menu.filter((items) => items.category === "soup");
  const pizza = Menu.filter((items) => items.category === "pizza");

  const salad = Menu.filter((items) => items.category === "salad");

  return (
    <div>
      <Menucover Img={ORderpage} Titile="order food"></Menucover>
      <div className="flex flex-col justify-center items-center">
        <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
          <TabList className="text-xl font-bold space-x-5">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel className="mt-3">
            <div className="grid grid-cols-3 gap-3">
              {salad.map((items) => (
                <Foodcard key={items._id} items={items}></Foodcard>
              ))}
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
