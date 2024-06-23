import AddFeatures from "./AddFeatures";
import { AiOutlineDrag } from "react-icons/ai";
import { MdDesktopWindows } from "react-icons/md";
import { FaFileAlt, FaRegEye, FaUserSecret, FaChartLine } from "react-icons/fa";

const features = [
  {
    topic: "Drag and Drop Interface",
    description:
      "Our drag and drop interface allows users to effortlessly create and customize their projects. Simply drag elements from the toolbar and drop them into place. This intuitive interface requires no prior technical knowledge, making it accessible for everyone.",
    icon: <AiOutlineDrag />,
  },
  {
    topic: "Multi-platform Compatibility",
    description:
      "Our application is designed to work seamlessly across multiple platforms including Windows, macOS, iOS, and Android. This ensures that users can access their projects and continue working on them from any device, at any time.",
    icon: <MdDesktopWindows />,
  },
  {
    topic: "Built-in Templates",
    description:
      "We offer a wide range of built-in templates to kickstart your projects. Whether you're designing a website, creating a presentation, or building a report, our templates are professionally designed and fully customizable.",
    icon: <FaFileAlt />,
  },
  {
    topic: "Real-time Preview",
    description:
      "Our real-time preview feature lets you see changes instantly as you make them. This eliminates the need for constant switching between edit and preview modes, enhancing your workflow and productivity.",
    icon: <FaRegEye />,
  },
  {
    topic: "Collaborative Tools",
    description:
      "Collaboration is at the heart of our platform. Our collaborative tools allow multiple users to work on the same project simultaneously. You can share projects, leave comments, and track changes in real-time.",
    icon: <FaUserSecret />,
  },
  {
    topic: "Analytic Dashboard",
    description:
      "Our analytic dashboard provides comprehensive insights into your project's performance. Track key metrics such as user engagement, traffic sources, and conversion rates. This data-driven approach helps you make informed decisions to optimize your project.",
    icon: <FaChartLine />,
  },
];

const Features = () => {
  return (
    <div className="w-[90vw] mx-auto text-center md:w-[80vw] mt-36">
      <h1 className="text-xl text-orange-500 uppercase">Features</h1>
      <h1 className="mt-4 text-5xl font-bold">
        Easy build{" "}
        <span className="text-5xl text-transparent bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-text">
          your code
        </span>
      </h1>

      <div className="grid grid-cols-1 gap-6 p-3 mt-6 md:grid-cols-3">
        {
            features.map((feature, index) => {
                return (
                    <AddFeatures key={index} items={feature} />
                )
            })
        }
      </div>
    </div>
  );
};

export default Features;
