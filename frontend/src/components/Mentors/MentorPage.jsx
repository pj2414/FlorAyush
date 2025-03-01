import { useEffect, useState } from "react";
import { mentorData } from "../../../public/assets/data/Data";
import MentorDetails from "./MentorDetails";

const MentorPage = () => {
  const [mentors, setMentors] = useState(mentorData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    // Filtering mentors based on category and field of expertise
    let filteredMentors = mentorData;

    if (selectedCategory) {
      filteredMentors = filteredMentors.filter(
        (mentor) => mentor.category === selectedCategory
      );
    }

    if (selectedField) {
      filteredMentors = filteredMentors.filter(
        (mentor) => mentor.expertise === selectedField
      );
    }

    setMentors(filteredMentors);
  }, [selectedCategory, selectedField]);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleFieldChange = (e) => setSelectedField(e.target.value);
  const handleClick = (mentor) => setSelectedMentor(mentor);

  if (selectedMentor) {
    return <MentorDetails mentor={selectedMentor} setSelectedMentor={setSelectedMentor} />;
  }
  return (
    <div className="mt-28 px-16">
         <div className="container mx-auto p-5">
       
        {/* Filter Section */}
        <div className="bg-mine-shaft-950 shadow-md rounded-lg p-5 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Mentors</span> By:</h2>
          <div className="flex space-x-4">
            <div>
              <label className="block mb-2 text-mine-shaft-200">Category</label>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="block w-full bg-mine-shaft-900 border border-website-color-700 rounded px-3 py-2"
              >
                <option value="">All Categories</option>
                <option value="Ayurveda">Ayurveda</option>
                <option value="DPM">Doctor of Plant Medicine (DPM)</option>
                <option value="Herbalist">Herbalist</option>
                <option value="Naturopath">Naturopathic Doctor</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-mine-shaft-200">Expertise</label>
              <select
                value={selectedField}
                onChange={handleFieldChange}
                className="block w-full bg-mine-shaft-900 border border-website-color-700 rounded px-3 py-2"
              >
                <option value="">All Expertise</option>
                <option value="Plant Medicine">Plant Medicine</option>
                <option value="Herbal Remedies">Herbal Remedies</option>
                <option value="Natural Healing">Natural Healing</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mentor Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-mine-shaft-950 p-5 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
                onClick={() => handleClick(mentor)}
              >
                <img
                  src="https://images.unsplash.com/photo-1726743887906-9a3b86e0e9ad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-website-color-600  text-center font-bold">{mentor.name}</h3>
                <p className=" text-center">{mentor.expertise}</p>
              </div>
            ))
          ) : (
            <div className="">
              <p className="">No mentors found matching the selected criteria.</p>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MentorPage