import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/digital-credentials.jpg";
import benefitTwoImg from "../public/img/digi-cred.jpg";

const benefitOne = {
  title: "Blockchain Node as a Services",
  desc: "TechArima offers blockchain enviornment for students for learning and practicing labs and also provide developer instance for developers for running the POC or projects in Blockchain.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Multi-Cloud and Multichain Platform",
      desc: "Get your node and do hand-on with smart contract in Ethereum, Algorand and Hyperledger Fabric.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Zero-code deployment",
      desc: "Create nodes and set up consortia in just a few clicks.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Get Assistance",
      desc: "Our highly qualified technical experts will help you to build Dapp and deploy a blockchain solutions",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Digital Credentials and Badges",
  desc: "Our Digital Credentials Management Application helps Education Institutes, Training Providers, Academies, Universities, Companies to manage their credentials and badges and make their brand in digital presence.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Tamper Proof Digital Credentials and Documents",
      desc: "You can generate Tamper proof certficates with Green Blockchain.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Issue Certificate in a bulk",
      desc: "upload and generate certificate in a bulk in a hassle-free.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Verify Certification",
      desc: "No Thridparty is required for verification and able to check the credentials in our application. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
