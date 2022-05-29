import Head from "next/head";
import Hero from "../components/hero";
import Roadmap from "../components/timeline";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Image from "next/image";

import heroImg from "../public/img/bgavrm.png";

import womImg from "../public/img/bgeth.png";

import hrImg from "../public/img/bghrm.png";

import conImg from "../public/img/bgcon.png";
import vrmImg from "../public/img/bgavrm.png";

import comImg from "../public/img/bgcom.png";


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
        <title>Talentegra - An Education Consulting Company</title>
        <meta
          name="description"
          content="Arima - Get Delight in blockchain and metaverse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Roadmap />


      <Footer />
      <PopupWidget />
    </>
  );
}
