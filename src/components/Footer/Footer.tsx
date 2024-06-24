
const Footer = () => {
  return (
    <div className="absolute flex items-center justify-center w-full gap-3 pb-4 mx-auto mt-4 text-center text-white bottom-2 md:gap-8">
      &copy; copyright
      <div className="flex items-center justify-center space-x-4">
        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          src="https://rb.gy/n8jv57"
          alt="Logo"
        />
        <span className="font-bold text-transparent md:text-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text">
          @VirtualWorld
        </span>
      </div>
    </div>
  );
}

export default Footer