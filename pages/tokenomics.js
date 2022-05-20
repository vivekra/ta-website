import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Prod from "../components/prod";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Token  from "../components/token";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Tokenomics() {
  return (
    <>
      <Head>
        <title>Arima - A Blockchain Company</title>
        <meta
          name="description"
          content="Arima - Get your gaming expereince in blockchain and metaverse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Token />
      
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Gain a knowledge"
        title="Learn how to fullfil your needs">
        We will be clarifiing all your queries, feel free to contact us.
      </SectionTitle>
      <Faq />
      <Cta />   
      <Footer />
      <PopupWidget />
    </>
  );
}
