import video1 from "./../../assets/video1.mp4"
import video2 from "./../../assets/video2.mp4"

const LandingPage = () => {
  return (
    <div className="w-[90vw] mx-auto text-center md:w-[80vw] mt-22">
      <h1 className="mt-4 text-5xl font-bold capitalize md:mt-8">
        Virtual World Builds Tools{" "}
        <span className="text-5xl text-transparent bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="mx-auto mt-6 text-center md:w-1/2 text-slate-500">
        Empower your creativity and bring your VR app ideas to life with out
        intutive development tools Get started today and turn your imagination
        into immersive reality.
      </p>

      <div className="flex items-center justify-center gap-4 mt-6 text-xl md:text-xl place-items-center">
        <button className="px-4 py-2 text-center border-2 border-gray-300 rounded-md text-nowrap">
          Documentation
        </button>
        <button className="px-4 py-2 rounded bg-gradient-to-tr from-orange-600 to-orange-400 text-nowrap">
          Start for free
        </button>
      </div>

      <div className="gap-4 p-4 mt-8 space-y-6 md:grid md:grid-cols-2 md:gap-6 place-items-center">
        {/* Videos */}
        <video className="mt-6 border-2 border-orange-500 rounded-md" src={video1} muted autoPlay loop></video>
        <video className="border-2 border-orange-500 rounded-md " src={video2} muted autoPlay loop></video>
      </div>
    </div>
  );
}

export default LandingPage