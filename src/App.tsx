import { useState } from "react";
import { Features, LandingPage, Loader, Navbar, Workflow } from "./components/Export"

const App = () => {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 1500);

   if (loader) {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-screen transition-all">
        <Loader />
      </div>
    );
   }

  
  return (
    <div className="min-h-screen pt-28 pb-28 bg-[#1E0342] text-white ">
      <Navbar />
      <LandingPage />
      <Features />
      <Workflow />
    </div>
  );
}

export default App