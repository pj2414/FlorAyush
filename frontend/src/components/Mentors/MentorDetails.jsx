

const MentorDetails = ({ mentor, setSelectedMentor }) => {
  return (
    <div className="mt-28 min-h-screen bg-black text-website-color-700">
    
    
      <div className="container mx-auto p-5">
        <button
          onClick={() => setSelectedMentor(null)}
          className=" bg-website-color-700 px-3 py-1 rounded-lg  text-white  mb-4 hover:bg-website-color-800"
        >
          Back to Mentor List
        </button>

        <div className="bg-mine-shaft-950 shadow-lg rounded-lg p-5 flex flex-col md:flex-row items-center">
          {/* Details Section */}
          <div className="w-full md:w-2/3 pr-5">
            <h2 className="text-3xl font-bold  mb-2  text-center">{mentor.name}</h2>
            <p className="text-xl  mb-4  text-center">{mentor.expertise}</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Bio:</h3>
              <p className="text-mine-shaft-100">{mentor.bio}</p>
            </div>
          </div>

          {/* Photo Section */}
          <div className="w-full md:w-1/3 flex justify-center items-start mt-4 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1726743887906-9a3b86e0e9ad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={mentor.name}
              className="w-32 h-32 rounded-full"
            />
          </div>
        </div>

        <div className="bg-mine-shaft-950 shadow-lg rounded-lg p-5 mt-8 ">
          <h3 className="text-xl font-semibold mb-2">Research Papers:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {mentor.researchPapers.map((paper, index) => (
              <li key={index} className="mb-2">
                <a
                  href={paper.link}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {paper.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Book a Session Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => alert(`Session booked with ${mentor.name}`)} // Replace with actual session booking logic
            className="bg-website-color-700 text-white font-bold py-2 px-4 rounded-full hover:bg-website-color-800 focus:outline-none"
          >
            Book a Session!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
