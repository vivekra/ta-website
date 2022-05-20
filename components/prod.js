import Image from "next/image";
import Container from "./container";
import Nfta from "./nfta";
import heroImg from "../public/img/bgavrm.png";

export default function Prod() {
  return (
    <>
          <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Get Delighted in Metaverse Games
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Arima - Play and Earn a Token.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://digitalq.io"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-600 rounded-md ">
                Connect
              </a>
           
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="650"
              height="492"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>
      <Container>
      <Nfta />
      </Container>
    </>
  );
}

