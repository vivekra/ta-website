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

export default function Terms() {
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
        title="Terms">
         TechArima uses cookies, IP addresses, and browser information. This information provides us with insight into how effective certain areas of our Web site are to users and how we might improve it.

      </SectionTitle>

      <Container className="flex flex-wrap ">
      <div className="w-full max-w-2xl p-6 mx-auto">
      <p className="leading-loose font-bold">Terms And Conditions</p><br></br>
      <p>
The material contained in this web site is copyrighted and owned by TechArima, together with any other intellectual property rights in such material, unless otherwise indicated. All rights reserved.
</p> <br></br><p>
All content present on this site is the exclusive property of TechArima. The software, text, images, graphics, video and audio used on this site belong to TechArima. No material from this site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from TechArima. All rights not expressly granted herein are reserved. Unauthorized use of the materials appearing on this site may violate copyright, trademark and other applicable laws, and could result in criminal or civil penalties.
</p><br></br><p className="leading-relax font-bold">
Terms of Use</p><br></br>
<p className="leading-normal">
1. The following terms and conditions will be deemed to have been accepted by the User on usage of the website http://www.techarima.com/. You are requested to read them carefully before you use the services of this site.
</p><br></br>
<p>
2. By using the Site, you agree to follow and be bound by the following terms and conditions concerning your use of the Site. TechArima may revise the Terms of Use at any time without notice to you. Areas of the Site may have different terms of use posted. If there is a conflict between the Terms of Use and terms of use posted for a specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site.
</p><br></br>
3. TechArima may terminate User’s access at any time for any reason. The provisions regarding to disclaimer of warranty, accuracy of information and indemnification shall survive such termination. TechArima may monitor access to the Site.
<p>
4. TechArima shall have no responsibility for any damage to User’s computer system or loss of data that result from the download of any content, materials, information from the Site.
</p> <br></br> <p>
5. TechArima may change or discontinue any aspect of its website at any time, including, its content or features. TechArima reserves the right to change the terms and conditions applicable to use of the Site. Such changes shall be effective immediately upon notice, which shall be placed on the Site.
</p><br></br><p>
6. In no event will Digtial-Q be liable for damages of any kind, including without limitation, direct, incidental or consequential damages (including, but not limited to, damages for lost profits, business interruption and loss of programs or information) arising out of the use of or inability to use TechArima’s website, or any information provided on the website, or any claim attributable to errors, omissions or other inaccuracies or interpretations thereof. Some jurisdictions do not allow the limitation or exclusion of liability. Accordingly, some of the above limitations may not apply to the User.
</p>
      </div>
      

      </Container>
      
      <Footer />
      <PopupWidget />
    </>
  );
}
