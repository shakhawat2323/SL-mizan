import React from "react";

const WaitlistSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#ffffff_10%,_#f0f4ff_20%,_#d1d8ff_30%,_transparent_40%)] bg-[length:20px_20px]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Product</h1>
        <p className="mb-6">
          Be part of something truly extraordinary. Join thousands of others
          already gaining early access to our revolutionary new product.
        </p>
        <form className="mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Get Notified
          </button>
        </form>
        <p>100+ people on the waitlist</p>
      </div>
    </div>
  );
};

export default WaitlistSection;
