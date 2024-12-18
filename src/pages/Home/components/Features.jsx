import React, { useState } from "react";
import { FeatureBox } from "./FeatureBox";

export const Features = () => {
  const [features, setFeatures] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files, anywhere ",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque esse, facere optio atque iste rem.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Realtime Collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque esse, facere optio atque iste rem.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of files",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque esse, facere optio atque iste rem.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque esse, facere optio atque iste rem.",
    },
  ]);
  return (
    <section className=" pb-[200px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
        {features.map((feature) => {
          return(<FeatureBox
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            desc={feature.desc} 
          />); 
          
        })}
        </div>
      </div>
    </section>
  );
};
