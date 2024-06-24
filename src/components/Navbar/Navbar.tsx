import { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {

  const [show, setShow] = useState(false);
  
  return (
    <header className="w-full h-auto p-4 px-6 text-sm bg-transparent md:text-lg backdrop-blur-md border-b-[1px] fixed top-0">
      <nav className="flex flex-row justify-between">
        <div className="flex items-center justify-center space-x-4">
          <img
            className="rounded-full cursor-pointer h-14 w-14"
            src="https://rb.gy/n8jv57"
            alt="Logo"
          />
          <span className="font-bold text-transparent md:text-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text">
            VirtualWorld
          </span>
        </div>
        <div className="items-center justify-between hidden md:flex md:gap-4">
          <a href="#">Features</a>
          <a href="#">Workflow</a>
          <a href="#">Pricing</a>
        </div>
        <div className="items-center justify-center hidden gap-4 md:flex">
          <button className="px-3 py-1 border-2 border-gray-300 rounded-md text-nowrap">
            Sign in
          </button>
          <button className="px-2 py-1 rounded bg-gradient-to-tr from-orange-600 to-orange-400 text-nowrap">
            Create an account
          </button>
        </div>
        {/* Hamburger Menu Section */}
        <div
          onClick={() => setShow((prev) => (!prev))}
          className="flex items-center justify-center md:hidden"
        >
          <Hamburger isClicked={show} />
          {show ? (
            <div
              className="fixed w-1/4 p-4 bg-black rounded top-24 h-fit right-4 backdrop-blur-md "
            >
              <div
                className="flex flex-col justify-between space-y-8 text-xl text-left md:gap-4 left-12"
              >
                <a
                  className="transition-all duration-200 delay-75 hover:translate-x-4 hover:text-orange-600"
                  href="#"
                >
                  Features
                </a>
                <a
                  className="transition-all duration-200 delay-75 hover:translate-x-4 hover:text-orange-600"
                  href="#"
                >
                  Workflow
                </a>
                <a
                  className="transition-all duration-200 delay-75 hover:translate-x-4 hover:text-orange-600"
                  href="#"
                >
                  Pricing
                </a>
                <a
                  className="transition-all duration-200 delay-75 hover:translate-x-4 hover:text-orange-600"
                  href="#"
                >
                  Testamonials
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar