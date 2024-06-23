import code from "./../../assets/code.jpg"

const Workflow = () => {
  return (
    <div className="w-[90vw] mx-auto text-center md:w-[80vw] mt-22">
      <h1 className="mt-4 text-5xl font-bold">
        Accelerate your{" "}
        <span className="text-5xl text-transparent bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text">
          coding Workflow
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <img
            className="mt-4 rounded-md"
            src={code} alt="Workflow" />
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Workflow