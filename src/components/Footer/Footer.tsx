
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-16 py-2.5 w-full text-sm leading-loose bg-black text-zinc-400 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 items-start max-w-full w-[201px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b16f6fd56cb7226d3c7fb04ae208b05e1f0c4eb1b7a839b640b15d09f530152?placeholderIfAbsent=true&apiKey=868bd20bc6d8476891a5b686a1313f9e"
          alt="Company Logo"
          className="object-contain shrink-0 w-11 rounded aspect-[1.91]"
        />
        <div className="grow shrink w-[133px]">© All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
