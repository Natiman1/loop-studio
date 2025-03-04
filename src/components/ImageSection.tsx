import { useMediaQuery } from "react-responsive";
import vrDesktop from "/assets/desktop/image-interactive.jpg";
import vrMobile from "/assets/mobile/image-interactive.jpg";

const ImageSection = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="relative flex w-full flex-col items-center justify-center py-22 lg:flex-row">
      <div className="relative lg:w-2/3">
        <img
          src={isTablet ? vrMobile : vrDesktop} // Replace with your actual image
          alt="VR Experience"
          className="h-[218px] w-auto lg:h-[500px]"
        />
      </div>

      {/* Text Section (Overlapping) */}
      <div className="max-w-[333px] bg-white p-6 text-center lg:absolute lg:right-25 lg:bottom-10 lg:max-w-md lg:p-12 lg:pl-20 lg:text-start">
        <h2 className="font-subHeading text-2xl font-light uppercase lg:text-4xl">
          The Leader in <br /> Interactive VR
        </h2>
        <p className="text-darkgray mt-2 leading-relaxed lg:mt-6 lg:leading-[25px]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default ImageSection;
