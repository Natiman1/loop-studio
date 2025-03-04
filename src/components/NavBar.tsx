import logo from "/assets/logo.svg";
import hamburger from "/assets/icon-hamburger.svg";
import close from "/assets/icon-close.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("#home");
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const id = event.currentTarget.getAttribute("href"); // Get href value
    if (id) setIsActive(id); // Update active link
    setIsOpen(false); // Close menu
  };

  return (
    <nav className="z-50 flex w-full items-center justify-between px-8 py-12 md:px-18 lg:pl-40 lg:pr-25 lg:pt-16">
      <img src={logo} alt="Logo" className="z-40" />
      <img
        src={isOpen ? close : hamburger}
        alt="Menu logo"
        onClick={toggle}
        className="absolute right-0 z-40 mr-8 h-[23px] w-[28px] cursor-pointer md:hidden"
      />
      <div
        className={clsx(
          "nav-links font-subHeading fixed top-0 right-0 flex h-full w-full flex-col gap-6 bg-black pt-[118px] pl-8 tracking-wider text-white uppercase md:relative md:flex md:w-auto md:flex-row md:gap-9 md:bg-transparent md:px-0 md:pt-0 md:capitalize",
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          "transition-transform duration-300 ease-in-out",
        )}
      >
        <ul className="font-subHeading flex flex-col justify-center gap-5 md:flex-row md:items-center">
          <li>
            <a
              id="home"
              href="#about"
              className={`text-gray-300 duration-200 ease-in-out hover:text-white md:pb-3 md:text-white md:hover:border-b-3 ${
                isActive === "#about" ? "md:border-b-3" : ""
              }`}
              onClick={handleClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              id="careers"
              href="#careers"
              className={`text-gray-300 hover:text-white md:pb-3 md:text-white md:hover:border-b-3 ${
                isActive === "#careers" ? "md:border-b-3" : ""
              }`}
              onClick={handleClick}
            >
              Careers
            </a>
          </li>
          <li>
            <a
              id="events"
              href="#events"
              className={`text-gray-300 hover:text-white md:pb-3 md:text-white md:hover:border-b-3 ${
                isActive === "#events" ? "md:border-b-3" : ""
              }`}
              onClick={handleClick}
            >
              Events
            </a>
          </li>
          <li>
            <a
              id="products"
              href="#products"
              className={`text-gray-300 hover:text-white md:pb-3 md:text-white md:hover:border-b-3 ${
                isActive === "#products" ? "md:border-b-3" : ""
              }`}
              onClick={handleClick}
            >
              Products
            </a>
          </li>
          <li>
            <a
              id="support"
              href="#support"
              className={`text-gray-300 hover:text-white md:pb-3 md:text-white md:hover:border-b-3 ${
                isActive === "#support" ? "md:border-b-3" : ""
              }`}
              onClick={handleClick}
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
