import Image from "next/image";
import Container from "./container";
import Nfta from "../components/nfta";
import heroImg from "../public/img/bgmeta.png";
import classImg from "../public/img/bgopadi.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Take your Assessment Online
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            We assist you with progressing your entire exam life cycle to digital assessment platform.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://pmny.in/6IZfzubjrx7Q"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-600 rounded-md ">
                Online Assessment
              </a>
           
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              //src={heroImg}
              src={classImg}
              width="650"
              height="492"
              alt="Education Illustration"
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
  
