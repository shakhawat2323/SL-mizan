import React from "react";
import { Parallax } from "react-parallax";
const Menucover = ({ Img, Titile }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={Img}
      bgImageAlt="the Menu"
      strength={-200}
    >
      <div>
        <div class="hero h-[500px]">
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{Titile}</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Menucover;
