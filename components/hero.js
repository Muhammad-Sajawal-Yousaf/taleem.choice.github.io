import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  const handleLoginClick = (event) => {
    event.preventDefault();
    window.location.href = "/logpage";
  };
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Guiding Your Educational Journey with Excellence.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Taleem.Options transforms aspirations into achievements through personalized guidance and global insights. Join us, navigate your path, and embark on a journey towards academic success. Your future begins now with Taleem.Options - where education meets empowerment!
            </p>
            
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                // href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                
              <button onClick={handleLoginClick}>Login</button>
              </a>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="100%"
              height="100%"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">2000+</span>{" "}
            students worldwide
          </div>

        </div>
      </Container>
    </>
  );
}

export default Hero;