import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Image from "next/image";

import heroImg from "../public/img/bgavrm.png";

import womImg from "../public/img/bgeth.png";

import hrImg from "../public/img/bghrm.png";


import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Container from "../components/container";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>TechArima - A Blockchain Company</title>
        <meta
          name="description"
          content="TechArima - Made your future technology in blockchain and metaverse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="TechArima Services"
        title="Blockchain Consulting">
         We provide Blockchain consulting and development services for startups and Companies.
      </SectionTitle>
    
     

     <Container className="flex flex-wrap ">


<div className="flex items-center justify-center w-full lg:w-1/2">
    <div className="">
      <Image
        src={hrImg}
        width="650"
        height="492"
        alt="Hero Illustration"
        layout="intrinsic"
        loading="eager"
        
      />
    </div>
  </div>
  <div className="flex items-center w-full lg:w-1/2">
    <div className="max-w-2xl mb-8">
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        Blockchain Consulting
      </h1>
      <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
      TechArima - Provider of DLT solution development, NFT (Non-fungible Tokens), asset digitization, and end-to-end blockchain solution creation for businesses.
      </p>

   
    </div>
  </div>

</Container>

    
      
<Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Web3 Development
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            TechArima - Provider of DLT solution development, NFT (Non-fungible Tokens), asset digitization, and end-to-end blockchain solution creation for businesses.
            </p>

         
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={womImg}
              width="650"
              height="492"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>




      <Footer />
      <PopupWidget />
    </>
  );
}
