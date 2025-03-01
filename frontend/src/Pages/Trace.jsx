

const Trace = () => {
  const stages = ["Farmer", "FloraAyush Distributor", "Customer"];

  return (
    <div className="mt-28 px-16">
      <div className="min-h-screen flex flex-col items-center py-10 ">
        {/* Image Section */}
        <div className="w-full max-w-md mb-8">
          <img
            src={"/assets/images/qr.png"}
            alt="Trace Image"
            className="rounded-lg shadow-lg object-cover w-60 ml-28"
          />
        </div>

        {/* Trace Bar */}
        <div className="flex items-center justify-center w-full max-w-4xl">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="flex items-center text-center relative"
            >
              {/* Stage Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-sm bg-green-500">
                {index + 1}
              </div>

              {/* Connecting Line */}
              {index < stages.length - 1 && (
                <div className="h-1 w-24 bg-green-500"></div>
              )}

              {/* Stage Label */}
              <div className="absolute top-14 w-32 text-sm font-medium text-green-600">
                {stage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trace;
