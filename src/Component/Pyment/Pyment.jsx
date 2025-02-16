import React from "react";
import SectionTitile from "./../Home/SectionTitile";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChecOUtform from "./ChecOUtform";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);

const Pyment = () => {
  return (
    <div>
      <SectionTitile
        hading="Pyment"
        subHading="please pay to eat"
      ></SectionTitile>
      <div>
        <Elements stripe={stripePromise}>
          <ChecOUtform></ChecOUtform>
        </Elements>
      </div>
    </div>
  );
};

export default Pyment;
