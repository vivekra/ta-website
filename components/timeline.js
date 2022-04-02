import React from "react";
import Container from "./container";

export default function Timeline() {
  return (
    <Container>


<div className="flex items-center w-full lg:w-1/2">
    <div className="max-w-2xl mb-8">
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        Timeline
      </h1>
     

   
    </div> </div>


      <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-[#00519d]  col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Dec 2020</h3>
                <p class="leading-tight text-justify">
                  Started Blockchain Entity
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow"
                ></div>
              </div>
            </div>
            
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                class="bg-[#00519d] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">May 2021</h3>
                <p class="leading-tight text-justify">
                  Launched Certificate Application
                </p>
              </div>
            </div>
            
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-[#00519d] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Feb 2022</h3>
                <p class="leading-tight text-justify">
                  Launch Arima - Token
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow"
                ></div>
              </div>
            </div>
            



            
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                class="bg-[#00519d] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Apr 2022</h3>
                <p class="leading-tight text-justify">
                  Building a NFT Marketplace
                </p>
              </div>
            </div>
          </div>
       

    </Container>
  );
}
