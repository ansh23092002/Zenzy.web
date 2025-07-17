import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contect = () => {
  return (
    <div id="contect" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-custom-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contect-clip-path-1"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass="contect-clip-path-2 lg:translate-y-40 transate-y-60"
            src="img/contact-2.webp"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125 "
            src="img/swordman-partial.webp"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.webp"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] uppercase font-general">Join Zentry</p>
          <p className="special-font mt-10 w-full font-zentry-regular text-5xl leading-[0.9] md:text-[6rem]">
            {" "}
            Let's b<b>u</b>ild the
            <br /> new era of
            <br /> g<b>a</b>ming t<b>o</b>gether
          </p>
          <Button title="contact us " containerClass="mt-10 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Contect;
