import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";


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

export default function Privacy() {
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
      
      <SectionTitle
        pretitle="TechArima"
        title="Privacy Policy">
         TechArima uses cookies, IP addresses, and browser information. This information provides us with insight into how effective certain areas of our Web site are to users and how we might improve it.

      </SectionTitle>

      <Container className="flex flex-wrap ">
      <div className="w-full max-w-2xl p-6 mx-auto">
      <p> TechArima collects the information you provide when you send us e-mail and when you register.</p>

      <p className="leading-loose">
      <b>Sharing Collected Information</b>

<p className="leading-relax">TechArima shares information with our partners ONLY for the sole purpose of better supporting our current and future customers.</p>

<p><b>Third-Party Sites</b></p>

<p className="leading-relax">Please be aware that other Web sites that may be accessed through our site may collect personally identifiable information about you. TechArima does not share your personal information with those Web sites and is not responsible for their privacy practices. Please check the applicable Privacy Policy of those sites.
</p>
<p className="leading-loose font-bold break-all">Security

</p>
<p>

No site can guarantee that data transmission over the Internet is 100% secure. However, this Web site has security measures in place to protect against the loss, misuse and alteration of the information under our control.
</p>
<p className="leading-loose"><b>Our Consent to this Privacy Policy</b></p>

<p>By using this Web site, you agree to this Privacy Policy. This Policy appears in its completed form and supersedes any earlier version. This Privacy Policy is subject to change without notice; updates to our Privacy Policy will be posted here. This Privacy Policy is effective January 1, 2021.</p>

<p><b>Questions or Suggestions</b></p>

<p className="leading-relax">
If you have questions or suggestions concerning our privacy policy, please contact us.</p>

      </p>

      </div>
      

      </Container>
      
      <Footer />
      <PopupWidget />
    </>
  );
}
