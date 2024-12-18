import React, { useState } from "react";
import { FaFacebookF, FaInstagram , FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const [contact, setContact] = useState([
    {
      icon: "icon-phone.svg",
      text: "+0212121212",
    },
    {
      icon: "icon-email.svg",
      text: "example@fylo.com",
    },
  ]);
  const[links , setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog"
  ])
  return (
    <section className="bg-[#0c1524] pt-[300px] md:pt-[200px] pb-[100px] text-white ">
      <div className="container">
        <a href="/">
          <img
            src="/src/images/logo.svg"
            className="w-[175px] h-[66px] object-contain"
            alt=""
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full ">
            <img
              src="/src/images/icon-location.svg"
              alt="locationimage"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae,
              distinctio omnis ipsum voluptas possimus.
            </p>
          </div>
          <div>
            {contact.map((item) => {
              return (
                <div key={item.text} className="flex items-center gap-[15px] mb-[15px] last-of-type:0px">
                  <img
                    src={`/src/images/${item.icon}`}
                    alt=""
                    className="w-[18px] h-[18px] object-contain"
                  />
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link)=>{
              return <a key={link} href={`/${link.toLowerCase()}`} className="hover:text-[#67dbda] transition-all duration-200 text-base ">{link}</a>
            })}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
                  <a href="" className="group">
                    <div className="w-[40px] h-[40px] element-center border border-white rounded-full ">
                      <FaFacebookF className="group-hover:text-[#67dbda] transition-all duration-200"/>
                    </div>
                  </a>
                  <a href="" className="group">
                    <div className="w-[40px] h-[40px] element-center  border border-white rounded-full ">
                      <FaTwitter className="group-hover:text-[#67dbda] transition-all duration-200"/>
                    </div>
                  </a>
                  <a href="" className="group">
                    <div className="w-[40px] h-[40px] element-center  border border-white rounded-full ">
                      <FaInstagram className="group-hover:text-[#67dbda] transition-all duration-200" />
                    </div>
                  </a>
        </ul>

        </div>
      </div>
    </section>
  );
};
