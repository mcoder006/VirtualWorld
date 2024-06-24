import code from "./../../assets/code.jpg"
import tick from "./../../assets/checkmark.png";

const WorkflowData = [
  {
    title: "Code merge made easy.",
    description:
      "track the performance of your VR and gain insights into user behaviour",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your code and gain insights of user behaviour.",
  },
  {
    title: "Ai Assistance to reduce time",
    description:
      "Track the performance of your code and gain insights of user behaviour.",
  },
  {
    title: "Share work in minutes.",
    description:
      "Track the performance of your code and gain insights of user behaviour.",
  },
];

const Workflow = () => {
  return (
    <div className="w-[90vw] mx-auto text-center md:w-[80vw] mt-22">
      <h1 className="mt-4 text-5xl font-bold">
        Accelerate your{" "}
        <span className="text-5xl text-transparent bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text">
          coding Workflow
        </span>
      </h1>

      <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2">
        <div>
          <img className="mt-4 rounded-md" src={code} alt="Workflow" />
        </div>
        <div className="flex flex-col gap-4 mx-auto mt-4">
          {WorkflowData.map((work, index) => (
            <div
              className="flex flex-col justify-between gap-4 mt-2 mb-2"
              key={index}
            >
              <div className="flex items-center justify-between text-left">
                <img className="h-6" src={tick} alt="Tick" />
                <h2 className="flex-1 ml-6">{work.title}</h2>
              </div>
              <p className="ml-12 text-justify first-letter:capitalize">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow