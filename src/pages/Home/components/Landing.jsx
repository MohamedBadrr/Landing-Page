import React from "react";
import landingImage from "../../../images/illustration-intro.png";

function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px] md:pt-[150px]">
          <div className="w-[50 0px] max-w-full mb-[30px] md:mb-[50px]">
            <img
              src={landingImage}
              alt="landingImage"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-[20px] md:w-[600px] md:mx-auto max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ut
              laudantium incidunt ex, facilis, dicta alias mollitia possimus
              blanditiis unde placeat, illum ab? Optio repellat rem minus fugiat
              culpa blanditiis nulla
            </p>
          </div>
            <a href="/" className="mt-[30px] element-center btn w-[280px] h-[50px] rounded-[30px] font-medium text-white" >Get Started</a>
        </div>
      </div>
      <div className="w-full h-[200px]">
      <img src="/src/images/bg-curvy-desktop.svg" className="w-[100%] h-full" alt="photo" />
      </div>
    </section>
  );
}

export default Landing;
