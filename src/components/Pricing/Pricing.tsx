
const Pricing = () => {
  return (
    <div className="w-[90vw] mx-auto text-center md:w-[80vw] mt-22 space-x-4">
      <h1 className="pt-12 text-2xl md:text-5xl ">Pricing</h1>
      <div className="grid gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3 text-slate-500">
        {/* Free */}
        <div className="flex flex-col w-1/2 gap-4 p-3 mx-auto mt-4 text-center border rounded-md md:text-left md:w-full">
          <h1 className="text-2xl text-white">
            Free <span className="text-xs text-slate-400">/month</span>
          </h1>
          <p className="text-xl text-white">$0</p>
          <p>Private brand sharing</p>
          <p>10 GB storage</p>
          <p>Web Analytics</p>
          <p>Private Mode</p>
          <button className="w-full px-4 py-2 text-white transition-all border border-orange-400 rounded-md hover:bg-orange-500">
            Subscribe
          </button>
        </div>
        {/* Pro */}
        <div className="flex flex-col w-1/2 gap-4 p-3 mx-auto mt-4 text-center border rounded-md md:text-left md:w-full">
          <h1 className="text-2xl text-white">
            Pro{" "}
            <span className="text-lg text-orange-600">( Most popular )</span>
          </h1>
          <p className="text-xl text-white">
            $10 <span className="text-xs text-slate-400">/month</span>
          </p>
          <p>Private brand sharing</p>
          <p>10 GB storage</p>
          <p>Web Analytics</p>
          <p>Private Mode</p>
          <button className="w-full px-4 py-2 text-white transition-all border border-orange-400 rounded-md hover:bg-orange-500">
            Subscribe
          </button>
        </div>
        {/* EnterPrice */}
        <div className="flex flex-col w-1/2 gap-4 p-3 mx-auto mt-4 text-center border rounded-md md:text-left md:w-full">
          <h1 className="text-2xl text-white">Enterprise</h1>
          <p className="text-xl text-white">
            $200 <span className="text-xs text-slate-400">/month</span>
          </p>
          <p>Private brand sharing</p>
          <p>10 GB storage</p>
          <p>Web Analytics</p>
          <p>Private Mode</p>
          <button className="w-full px-4 py-2 text-white transition-all border border-orange-400 rounded-md hover:bg-orange-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing