import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ChecOUtform = () => {
  const { user } = useAuth();
  const [Errors, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [Tranjaction, setTranjaction] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecore = useAxios();
  const [cart] = useCart();
  const totalprice = cart.reduce((total, items) => total + items.price, 0);
  useEffect(() => {
    axiosSecore
      .post("/create-checkout-session", { price: totalprice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [totalprice, axiosSecore]);
  const Checoutformdata = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intert", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTranjaction(paymentIntent.id);
        Swal.fire({
          title: `Transaction successful!${paymentIntent.id}`,
          icon: "success",
          draggable: true,
        });

        const payemnt = {
          email: user?.email,
          price: totalprice,
          transactionId: paymentIntent.id,
          data: new Date(),
          cartId: cart.map((Items) => Items._id),
          Items: cart.map((item) => item.Items),
          status: "pending",
        };
        const res = await axiosSecore.post("/payment", payemnt);
        console.log("save payment ", res);
      }
    }
  };
  return (
    <form onSubmit={Checoutformdata}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-700">{Errors}</p>
    </form>
  );
};

export default ChecOUtform;
