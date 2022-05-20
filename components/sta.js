import React from "react";
import Container from "./container";

export default function Sta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-full gap-5 mx-auto text-white bg-[#00519d] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          Is blockchain right for my business case?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          If we’re not the experts in the problems you face, we’ll tell you. It’s important to us that your business be successful, and that means making sure you get the right advice at the right time. We know consultants in a wide variety of technologies and we’ll be happy to help you get in touch with them.

</p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://techarima.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#00519d] bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Call us
          </a>
        </div>
      </div>
    </Container>
  );
}
