// const Card = ({ name, description }) => {
//   return (
//     <div className="mx-5 flex flex-col gap-4 border border-website-color-700 items-center w-64 p-5 rounded-lg cursor-pointer hover:shadow-lg my-5 transition duration-300 ease-in-out transform hover:scale-105">
//       {/* Image Container */}
//       <div className="p-2 bg-azure-radiance-700 rounded-full">
//         <img
//           className="h-24 w-24 rounded-full object-cover"
//           src={`/assets/images/${name.toLowerCase()}.jpeg`} // Dynamic image source
//           alt={name}
//         />
//       </div>

//       {/* Title */}
//       <div className="text-lg font-semibold text-center">{name}</div>

//       {/* Description */}
//       <div className="text-sm text-center text-mine-shaft-300 min-h-[48px]">
//         {description}
//       </div>

     
//     </div>
//   );
// };

// export default Card;
// import { useState } from 'react';

// const Card = ({ name, description, price }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <div 
//         className="mx-5 flex flex-col gap-4 border border-website-color-700 items-center w-64 p-5 rounded-lg cursor-pointer hover:shadow-lg my-5 transition duration-300 ease-in-out transform hover:scale-105"
//         onClick={openModal}
//       >
//         {/* Image Container */}
//         <div className="p-2 bg-azure-radiance-700 rounded-full">
//           <img 
//             className="h-24 w-24 rounded-full object-cover" 
//             src={`/assets/images/${name.toLowerCase()}.jpeg`}
//             alt={name} 
//           />
//         </div>
        
//         {/* Title */}
//         <div className="text-lg font-semibold text-center">{name}</div>
        
//         {/* Description */}
//         <div className="text-sm text-center text-mine-shaft-300 min-h-[48px]">
//           {description}
//         </div>
//       </div>

//       {/* Modal Overlay */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Backdrop with blur effect */}
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
//             onClick={closeModal}
//           ></div>

//           {/* Modal Content */}
//           <div className="bg-white rounded-xl p-8 max-w-md mx-4 relative z-10 shadow-xl">
//             {/* Close Button */}
//             <button 
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//               onClick={closeModal}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//               </svg>
//             </button>

//             {/* Plant Image */}
//             <div className="flex justify-center mb-6">
//               <img 
//                 className="h-32 w-32 rounded-full object-cover border-4 border-website-color-700" 
//                 src={`/assets/images/${name.toLowerCase()}.jpeg`}
//                 alt={name} 
//               />
//             </div>

//             {/* Plant Name */}
//             <h2 className="text-2xl font-bold text-center text-website-color-700 mb-4">{name}</h2>

//             {/* Plant Information */}
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold text-lg">Benefits:</h3>
//                 <p className="text-gray-700">{description}</p>
//               </div>

//               {price && (
//                 <div>
//                   <h3 className="font-semibold text-lg">Price:</h3>
//                   <p className="text-gray-700">₹{price}</p>
//                 </div>
//               )}

//               <div>
//                 <h3 className="font-semibold text-lg">How to Use:</h3>
//                 <p className="text-gray-700">
//                   {name === "Tulsi" 
//                     ? "Can be consumed as herbal tea, chewed raw, or used in cooking. Also available in supplement form."
//                     : name === "Neem" 
//                     ? "Can be used as oil, powder, or extract. Suitable for both internal consumption and external application."
//                     : "Consult with an Ayurvedic practitioner for personalized usage instructions."}
//                 </p>
//               </div>

//               <div className="mt-6 pt-4 border-t border-gray-200">
//                 <button 
//                   className="w-full py-2 bg-website-color-700 text-white rounded-lg hover:bg-website-color-800 transition"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Card;
import { useState } from 'react';

const Card = ({ name, description, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Detailed information for each plant
  const getPlantDetails = (plantName) => {
    const plantDetails = {
      "Tulsi": {
        scientificName: "Ocimum sanctum",
        otherNames: "Holy Basil, Sacred Basil",
        benefits: [
          "Helps fight respiratory infections and improves respiratory health",
          "Reduces stress and anxiety through adaptogenic properties",
          "Boosts immunity and fights infections with antimicrobial activity",
          "Lowers blood sugar levels in diabetic patients",
          "Contains anti-inflammatory compounds to reduce inflammation",
          "Helps reduce fever and treat common cold symptoms",
          "Supports cardiovascular health by reducing cholesterol and blood pressure",
          "Has antioxidant properties that protect against cell damage"
        ],
        howToUse: [
          "Fresh leaves can be chewed daily on empty stomach",
          "Dried leaves can be used to make tulsi tea",
          "Tulsi powder can be mixed with honey for respiratory issues",
          "Add fresh leaves to hot water for steam inhalation during cold",
          "Tulsi drops or tincture can be taken in water",
          "Available in capsule form as dietary supplement"
        ],
        precautions: [
          "May affect fertility, use cautiously if trying to conceive",
          "Should be avoided during pregnancy",
          "May interact with blood thinning medications",
          "May lower blood sugar, monitor if diabetic",
          "Discontinue 2 weeks before scheduled surgery"
        ]
      },
      "Neem": {
        scientificName: "Azadirachta indica",
        otherNames: "Indian Lilac, Margosa Tree",
        benefits: [
          "Powerful antibacterial properties for skin infections",
          "Natural blood purifier that detoxifies the body",
          "Anti-inflammatory properties reduce swelling and pain",
          "Helps manage acne, eczema and other skin conditions",
          "Effective against parasitic infections",
          "Supports liver function and prevents liver damage",
          "Natural insecticide and pest repellent",
          "Helps maintain healthy gums and treats gum diseases",
          "May help control blood sugar levels"
        ],
        howToUse: [
          "Neem oil can be applied topically for skin conditions",
          "Neem powder can be mixed with water for face packs",
          "Neem leaves can be boiled in water for bathing to treat skin problems",
          "Neem tea can be consumed for internal purification",
          "Neem twigs can be used as natural toothbrushes",
          "Neem supplements available as capsules"
        ],
        precautions: [
          "Not recommended during pregnancy as it may affect fertility",
          "Avoid in children especially under age 5",
          "May lower blood sugar levels, monitor if diabetic",
          "Can interact with immune system medications",
          "May cause liver damage in high doses"
        ]
      },
      "Ashwagandha": {
        scientificName: "Withania somnifera",
        otherNames: "Indian Ginseng, Winter Cherry",
        benefits: [
          "Powerful adaptogen that helps body manage stress",
          "Reduces cortisol levels, the stress hormone",
          "Improves mental clarity and cognitive function",
          "Boosts testosterone and supports reproductive health in men",
          "Enhances endurance and physical performance",
          "Strengthens immune system function",
          "Possesses anti-inflammatory and antioxidant properties",
          "May help reduce anxiety and depression symptoms",
          "Improves sleep quality and helps with insomnia"
        ],
        howToUse: [
          "Ashwagandha powder can be mixed with warm milk and honey",
          "Available as capsules and tablets for daily supplementation",
          "Ashwagandha tea can be prepared from the roots",
          "Liquid extracts or tinctures can be added to water or juices",
          "Can be included in health tonics and smoothies"
        ],
        precautions: [
          "May increase thyroid hormone levels - caution with thyroid disorders",
          "Not recommended during pregnancy",
          "May lower blood sugar and blood pressure",
          "Can cause digestive upset in some individuals",
          "May interact with immunosuppressants and sedatives"
        ]
      },
      "Amla": {
        scientificName: "Phyllanthus emblica",
        otherNames: "Indian Gooseberry, Amalaki",
        benefits: [
          "Extremely rich source of vitamin C - natural immunity booster",
          "Promotes healthy digestion and treats constipation",
          "Supports liver function and aids detoxification",
          "Promotes healthy hair growth and prevents premature graying",
          "Has anti-aging properties for skin health",
          "Helps reduce inflammation in the body",
          "Supports eye health and improves vision",
          "May help control blood sugar levels",
          "Supports heart health by regulating cholesterol levels"
        ],
        howToUse: [
          "Fresh amla can be consumed directly (though very sour)",
          "Amla juice can be taken daily mixed with water and honey",
          "Amla powder can be mixed with honey as a tonic",
          "Amla oil can be applied to hair and scalp",
          "Dried amla can be consumed as candy or in preserved form",
          "Available as capsules and tablets for supplementation"
        ],
        precautions: [
          "May increase bleeding risk - avoid before surgery",
          "May lower blood sugar - monitor if diabetic",
          "Can cause acid reflux in some individuals",
          "May cause diarrhea in high doses",
          "May interact with certain medications due to high vitamin C content"
        ]
      },
      "Brahmi": {
        scientificName: "Bacopa monnieri",
        otherNames: "Water Hyssop, Herb of Grace",
        benefits: [
          "Enhances memory formation and retention",
          "Improves cognitive function and mental alertness",
          "Reduces anxiety and mental fatigue",
          "Exhibits neuroprotective properties for brain health",
          "Has adaptogenic properties to reduce stress",
          "Anti-inflammatory effects on the central nervous system",
          "May help in managing ADHD symptoms",
          "Supports the body's natural sleep cycles",
          "Promotes hair growth when applied topically"
        ],
        howToUse: [
          "Brahmi powder can be consumed with warm milk and honey",
          "Brahmi tea can be prepared from dried leaves",
          "Brahmi oil can be applied externally to scalp for hair health",
          "Available as capsules and supplements for daily intake",
          "Fresh leaves can be consumed directly or added to smoothies",
          "Brahmi ghee is used in Ayurvedic treatments"
        ],
        precautions: [
          "May cause digestive issues like nausea or diarrhea in some people",
          "May slow heart rate - caution with bradycardia",
          "Can increase secretions in the urinary tract and lungs",
          "May interact with medications for Alzheimer's, glaucoma, and thyroid",
          "Not recommended during pregnancy without medical supervision"
        ]
      },
      "Ginger": {
        scientificName: "Zingiber officinale",
        otherNames: "Adrak, Ginger Root",
        benefits: [
          "Effective in relieving nausea and morning sickness",
          "Powerful anti-inflammatory that helps reduce muscle pain and soreness",
          "Aids digestion and helps with gas and bloating",
          "Helps fight respiratory infections and relieves congestion",
          "May help lower blood sugar and improve heart disease risk factors",
          "Contains antioxidants that protect against cell damage",
          "Helps reduce menstrual pain when taken at the beginning of the period",
          "May help prevent various types of cancer",
          "Can help fight infections due to antimicrobial properties"
        ],
        howToUse: [
          "Fresh ginger can be added to foods and beverages",
          "Ginger tea can be prepared by boiling sliced ginger in water",
          "Ginger powder can be added to warm milk or water",
          "Crystallized or candied ginger can be consumed directly",
          "Ginger oil can be used for massage or aromatherapy",
          "Available as capsules and supplements"
        ],
        precautions: [
          "May increase bile production - caution with gallbladder disease",
          "May increase bleeding risk - avoid before surgery",
          "Can cause heartburn or digestive discomfort in high doses",
          "May interact with blood thinners, diabetes medications, and blood pressure drugs",
          "Moderation advised during pregnancy (though generally considered safe)"
        ]
      },
      "Turmeric": {
        scientificName: "Curcuma longa",
        otherNames: "Haldi, Golden Spice",
        benefits: [
          "Contains curcumin, a powerful anti-inflammatory compound",
          "Strong antioxidant that neutralizes free radicals",
          "Boosts brain-derived neurotrophic factor linked to improved brain function",
          "Lowers risk of heart disease by improving endothelial function",
          "May help prevent and treat cancer at the molecular level",
          "Helps in managing arthritis symptoms and joint pain",
          "Demonstrates promising effects against depression",
          "Delays aging and fights age-related chronic diseases",
          "Helps in wound healing and skin health"
        ],
        howToUse: [
          "Can be added to food as a spice in cooking",
          "Golden milk (turmeric mixed with milk and honey) is popular",
          "Turmeric tea can be prepared by boiling in water",
          "Turmeric paste can be applied topically for skin conditions",
          "Available as capsules, usually with black pepper for absorption",
          "Fresh turmeric root can be juiced or added to smoothies"
        ],
        precautions: [
          "May increase bleeding risk - avoid before surgery",
          "Can cause digestive issues in high doses",
          "May interact with blood thinners, diabetes drugs, and acid-reducers",
          "Not recommended in high doses during pregnancy",
          "Can worsen gallbladder problems due to bile stimulation"
        ]
      },
      "Aloe Vera": {
        scientificName: "Aloe barbadensis miller",
        otherNames: "Ghritkumari, Burn Plant",
        benefits: [
          "Excellent for treating burns, sunburn, and minor wounds",
          "Moisturizes skin without making it greasy",
          "Contains antioxidants and reduces inflammation",
          "Accelerates healing of wounds and reduces scarring",
          "Helps treat digestive issues and has laxative properties",
          "Reduces dental plaque and treats gum disease",
          "Helps lower blood sugar levels in type 2 diabetes",
          "Prevents wrinkles and signs of aging",
          "Natural treatment for dandruff and scalp conditions"
        ],
        howToUse: [
          "Fresh gel can be applied directly to skin for burns and cuts",
          "Aloe vera juice can be consumed for digestive benefits",
          "Can be used as a natural moisturizer for face and body",
          "Aloe vera gel can be applied to hair and scalp for conditioning",
          "Available as supplements, drinks, and commercial skin products",
          "Can be used as a mouthwash when diluted"
        ],
        precautions: [
          "Oral aloe can cause cramping and diarrhea in some individuals",
          "Should not be used on severe burns or deep cuts",
          "May lower blood glucose - monitor if diabetic",
          "Can cause allergic reactions in sensitive individuals",
          "Not recommended during pregnancy due to uterine stimulant properties"
        ]
      },
      "Shatavari": {
        scientificName: "Asparagus racemosus",
        otherNames: "Wild Asparagus, Shatamull",
        benefits: [
          "Renowned female reproductive tonic supporting hormonal balance",
          "Helps relieve symptoms of menopause and PMS",
          "Enhances female fertility and supports reproductive health",
          "Acts as a galactagogue, increasing breast milk production",
          "Has adaptogenic properties to help manage stress",
          "Anti-inflammatory and antioxidant properties",
          "Supports digestive health and relieves gastric ulcers",
          "Boosts immunity and improves resistance to infections",
          "May have anti-aging effects on the body"
        ],
        howToUse: [
          "Shatavari powder can be consumed with milk and honey",
          "Available as capsules and tablets for supplementation",
          "Shatavari ghee is used in traditional Ayurvedic treatments",
          "Can be taken as a tincture mixed with water",
          "Available as part of Ayurvedic formulations for women's health",
          "Shatavari tea can be prepared from the roots"
        ],
        precautions: [
          "Not recommended for individuals with estrogen-sensitive conditions",
          "May cause allergic reactions in people allergic to asparagus",
          "Can cause digestive side effects like diarrhea in some people",
          "May interact with diuretic medications and lithium",
          "Use cautiously in diabetes as it may affect blood sugar levels"
        ]
      },
      "Arjuna": {
        scientificName: "Terminalia arjuna",
        otherNames: "Arjun, White Marudah",
        benefits: [
          "Strengthens heart function and supports cardiovascular health",
          "Helps regulate blood pressure and treat hypertension",
          "Maintains healthy cholesterol levels",
          "Protects heart tissue and improves circulation",
          "Has antioxidant properties that prevent cell damage",
          "Exhibits anti-inflammatory effects throughout the body",
          "Supports liver health and function",
          "May help in managing angina (chest pain)",
          "Traditionally used as wound healing agent"
        ],
        howToUse: [
          "Arjuna bark powder can be taken with warm milk and honey",
          "Available as capsules and tablets for heart health",
          "Arjuna tea can be prepared from the bark",
          "Used in traditional Ayurvedic heart tonics",
          "Arjuna ghee is used in some Ayurvedic preparations",
          "Available as extracts and tinctures"
        ],
        precautions: [
          "May enhance the effect of blood pressure medications",
          "Could interact with blood thinners due to its anticoagulant properties",
          "Not extensively studied in pregnancy - caution advised",
          "May lower blood glucose - monitor if diabetic",
          "Could cause digestive upset in some individuals"
        ]
      },
      "Moringa": {
        scientificName: "Moringa oleifera",
        otherNames: "Drumstick Tree, Miracle Tree, Sahjan",
        benefits: [
          "Extremely nutrient-dense with vitamins, minerals, and amino acids",
          "Powerful antioxidant that fights free radical damage",
          "Helps reduce inflammation throughout the body",
          "Lowers blood sugar levels and helps manage diabetes",
          "Reduces cholesterol and improves heart health",
          "Protects the liver and supports detoxification",
          "Enhances wound healing and skin health",
          "Boosts immune function with antimicrobial properties",
          "Support cognitive function and brain health"
        ],
        howToUse: [
          "Moringa leaves can be added to soups, salads and curries",
          "Moringa powder can be added to smoothies or water",
          "Moringa tea can be prepared from dried leaves",
          "Moringa oil can be applied topically for skin and hair",
          "Moringa seed extract is used for water purification",
          "Available as capsules and supplements"
        ],
        precautions: [
          "Bark and roots contain compounds that may be harmful in pregnancy",
          "May cause uterine contractions - avoid during pregnancy",
          "May enhance the effects of medications for thyroid disorders",
          "Can lower blood sugar - monitor if diabetic",
          "May interact with medications metabolized by the liver"
        ]
      }
    };

    return plantDetails[plantName] || {
      scientificName: "Information not available",
      otherNames: "Information not available",
      benefits: ["General health benefits", "Consult an Ayurvedic practitioner for more details"],
      howToUse: ["Consult an Ayurvedic practitioner for usage instructions"],
      precautions: ["Consult a healthcare professional before use"]
    };
  };

  const plantInfo = getPlantDetails(name);

  return (
    <>
      <div 
        className="mx-5 flex flex-col gap-4 border border-website-color-700 items-center w-64 p-5 rounded-lg cursor-pointer hover:shadow-lg my-5 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={openModal}
      >
        {/* Image Container */}
        <div className="p-2 bg-azure-radiance-700 rounded-full">
          <img 
            className="h-24 w-24 rounded-full object-cover" 
            src={`/assets/images/${name.toLowerCase()}.jpeg`}
            alt={name} 
          />
        </div>
        
        {/* Title */}
        <div className="text-lg font-semibold text-center">{name}</div>
        
        {/* Description */}
        <div className="text-sm text-center text-mine-shaft-300 min-h-[48px]">
          {description}
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur effect */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-4 relative z-10 shadow-xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Plant Header */}
            <div className="flex items-center space-x-6 mb-6">
              <img 
                className="h-24 w-24 rounded-full object-cover border-4 border-website-color-700" 
                src={`/assets/images/${name.toLowerCase()}.jpeg`}
                alt={name} 
              />
              <div>
                <h2 className="text-2xl font-bold text-website-color-700">{name}</h2>
                <p className="text-gray-600 italic">{plantInfo.scientificName}</p>
                <p className="text-gray-500 text-sm">Also known as: {plantInfo.otherNames}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-6">
              {/* Primary Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-website-color-700 mb-2">Primary Uses:</h3>
                <p className="text-gray-700 mb-2">{description}</p>
              </div>

              {/* Detailed Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-website-color-700 mb-2">Detailed Benefits:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {plantInfo.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* How to Use */}
              <div>
                <h3 className="text-lg font-semibold text-website-color-700 mb-2">How to Use:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {plantInfo.howToUse.map((usage, index) => (
                    <li key={index}>{usage}</li>
                  ))}
                </ul>
              </div>

              {/* Precautions */}
              <div>
                <h3 className="text-lg font-semibold text-website-color-700 mb-2">Precautions:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {plantInfo.precautions.map((precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              {price && (
                <div>
                  <h3 className="text-lg font-semibold text-website-color-700 mb-2">Price:</h3>
                  <p className="text-gray-700">₹{price} per package</p>
                </div>
              )}

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                <button 
                  className="px-6 py-2 bg-website-color-700 text-white rounded-lg hover:bg-website-color-800 transition"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;