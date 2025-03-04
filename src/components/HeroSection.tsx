import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <section className="h-full w-full overflow-hidden bg-[url(/assets/mobile/image-hero.jpg)] bg-cover md:bg-[url(/assets/desktop/image-hero.jpg)]">
      <NavBar />
      <div className="flex items-center justify-center pt-30  md:justify-start md:pl-14 lg:ml-25">
        <h1 className="font-subHeading li pr-auto mx-4 w-[416px] border-3 border-white p-5 text-[39px] font-extralight text-white uppercase md:w-[600px] md:pr-auto md:text-[60px] md:font-light md:px-10 md:leading-[65px]">
          immersive experiences that deliver
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
