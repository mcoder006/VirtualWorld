
interface Features {
    icon: React.ReactNode;
    topic: String;
    description: String;
}

const AddFeatures = ( { items } : { items: Features } ) => {
  return (
    <div className="w-1/2 mx-auto mt-2 mb-3 rounded mp-4 md:w-auto">
      <div className="flex gap-6">
        <i className="text-3xl font-bold text-orange-600">{items.icon}</i>
        <h1 className="text-xl text-slate-300">{items.topic}</h1>
      </div>
      <p className="mt-3 text-justify text-slate-400">{items.description}</p>
    </div>
  );
};

export default AddFeatures;
