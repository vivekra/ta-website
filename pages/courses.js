import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";

import Image from "next/image";
import heroImg from "../public/img/bgavrm.png";
import aboutImg from "../public/img/about.jpg";
import devImg from "../public/img/bgdev.png";
import servImg from "../public/img/bgserv.png";
import conImg from "../public/img/bgcon.png";
import autoImg from "../public/img/bgauto.png";




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

export default function Courses() {
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
              Courses
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Talentegra fabricated a worldwide standing for its capability to assist clients with accomplishing their business goals by giving innovative services.
              </p>

         
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={devImg}
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
              src={servImg}
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
              Blockchain
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            We believe in using the right technology for the problems at hand. Because technology advances so rapidly, keeping an open mind is critical.


            </p>

         
          </div>
        </div>
     
      </Container>


      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Cloud Administration
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Talentegra - Make your idea into working software solution.
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

      <Footer />
      <PopupWidget />
    </>
  );
}
