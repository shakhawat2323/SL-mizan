import React, { useEffect, useState } from "react";
import useAxiospublic from "./useAxiospublic";
import { useQuery } from "@tanstack/react-query";

const Usemenu = () => {
  const axiospublic = useAxiospublic();
  // const [Menu, setMenu] = useState([]);
  // const [Loding, setLoding] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoding(false);
  //     });
  // }, []);

  const {
    data: Menu = [],
    isPending: Loding,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiospublic.get("/menu");
      return res.data;
    },
  });
  return [Menu, Loding, refetch];
};

export default Usemenu;
