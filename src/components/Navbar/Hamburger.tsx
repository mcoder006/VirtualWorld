
const Hamburger = ( { isClicked } : { isClicked: Boolean } ) => {
  return (
    <div 
    className="relative flex items-center justify-center w-12 h-12 p-2 transition-all duration-150 cursor-pointer select-none">
      <span
        className={`absolute w-8 h-1 bg-white rounded-full top-[25%] transition-all duration-100 ease-linear ${
          isClicked ? "rotate-45 top-[50%]" : ""
        }`}
      ></span>
      <span
        className={`absolute w-8 h-1 bg-white rounded-full transition-all duration-100 ${
          isClicked ? "opacity-0 -translate-x-6 " : ""
        }`}
      ></span>
      <span
        className={`absolute w-8 h-1 bg-white rounded-full bottom-[25%] transition-all duration-100 ease-linear ${
          isClicked ? "-rotate-45 top-[50%]" : ""
        }`}
      ></span>
    </div>
  );
}

export default Hamburger