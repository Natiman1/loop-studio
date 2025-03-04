import logo from "/assets/logo.svg";
import facebook from "/assets/icon-facebook.svg";
import instagram from "/assets/icon-instagram.svg";
import pintererst from "/assets/icon-pinterest.svg";
import twitter from "/assets/icon-twitter.svg";
const Footer = () => {
  return (
    <section className="relative mt-30 flex flex-col md:pt-4 md:px-20 lg:px-40 items-center justify-center bg-black md:flex-row md:items-center md:justify-between">
      <div className="mt-15 md:mt-10 flex flex-col items-center justify-center gap-10 md:md:mb-8 md:items-start md:gap-4">
        <img src={logo} alt="Logo" />
        <div>
          <ul className="font-subHeading flex flex-col justify-center gap-4 text-center md:flex-row md:items-center">
            <li>
              <a
                id="home"
                href="#about"
                className="text-white hover:text-white md:pb-3 md:text-white md:hover:border-b-3"
              >
                About
              </a>
            </li>
            <li>
              <a
                id="careers"
                href="#careers"
                className="text-white hover:text-white md:pb-3 md:text-white md:hover:border-b-3"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                id="events"
                href="#events"
                className="text-white hover:text-white md:pb-3 md:text-white md:hover:border-b-3"
              >
                Events
              </a>
            </li>
            <li>
              <a
                id="products"
                href="#products"
                className="text-white hover:text-white md:pb-3 md:text-white md:hover:border-b-3"
              >
                Products
              </a>
            </li>
            <li>
              <a
                id="support"
                href="#support"
                className="text-white hover:text-white md:pb-3 md:text-white md:hover:border-b-3"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gap-6 md:flex md:flex-col md:items-end md:justify-center md:gap-2">
        <div className="mt-8 mb-5 md:mb-0">
          <ul className="flex cursor-pointer items-center justify-center gap-4">
            <li>
              <img
                src={facebook}
                alt="facebook"
                className="md:pb-2 md:text-white md:hover:border-b-3"
              />
            </li>
            <li>
              <img
                src={twitter}
                alt="twitter"
                className="md:pb-2 md:text-white md:hover:border-b-3"
              />
            </li>
            <li>
              <img
                src={pintererst}
                alt="pintererst"
                className="md:pb-2 md:text-white md:hover:border-b-3"
              />
            </li>
            <li>
              <img
                src={instagram}
                alt="instagram"
                className="md:pb-2 md:text-white md:hover:border-b-3"
              />
            </li>
          </ul>
        </div>
        <p className="text-darkgray mb-15 md:mb-4">
          &copy; {new Date().getFullYear()} Loopstudio. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
