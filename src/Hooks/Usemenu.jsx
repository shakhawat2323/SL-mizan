import React, { useEffect, useState } from "react";

const Usemenu = () => {
  const [Menu, setMenu] = useState([]);
  const [Loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoding(false);
      });
  }, []);
  return [Menu, Loding];
};

export default Usemenu;
