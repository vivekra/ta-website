import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";

import Image from "next/image";
import heroImg from "../public/img/bgavrm.png";
import aboutImg from "../public/img/about.jpg";
import womImg from "../public/img/bgavrm.png";
import hrImg from "../public/img/bghrm.png";
import autoImg from "../public/img/bgauto.png";
import abImg from "../public/img/bgabout.png";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Aboutus() {
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
      
     
      
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              About US
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Learn how we helped our several clients grow in online business.It will give you an idea of our capabilities.
            </p>

         
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={autoImg}
              width="650"
              height="492"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>

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
              Why TechArima?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            The Right Technology At The Right Time
We believe in using the right technology for the problems at hand. Because technology advances so rapidly, keeping an open mind is critical. What was the right solution yesterday may have already been replaced by a better one today, and you have to be willing to adapt. No single individual can be an expert in every possible technology, or have experience in every area. We make sure that we have professionals available from across the technology spectrum, so we can rely on answers that come from experience.
            </p>

         
          </div>
        </div>
     
      </Container>


      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              How we do it?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            First, we get a feel for what your goals are and how your product will work; we can't help you out of the muck until everyone knows what needs to be done. Then, we cover all the bases by starting at the bottom of the infrastructure and working our way up. Work on the Blockchain or Cloud Infrastructure, making sure you have all the basic services you need to be successful.   </p>

         
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={abImg}
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
