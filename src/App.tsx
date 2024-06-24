
import { Features, Footer, LandingPage, Navbar, Pricing, Workflow } from "./components/Export"

const App = () => {
  return (
    <div className="min-h-screen pt-28 pb-28 bg-[#1A2130] text-white relative">
      <Navbar />
      <LandingPage />
      <Features />
      <Workflow />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App