// import React from "react";

// function ConferenceSection() {
//   return (
//     <div className="w-full flex justify-between items-center bg-gray-100 px-8 py-10">
//       {/* Left Section */}
//       <div className="w-1/3 text-left mr-10">
//         {" "}
//         {/* Added margin-right */}
//         <h2 className="text-2xl font-bold">
//           Thank you for joining us at CPHIA 2023!
//         </h2>
//       </div>

//       {/* Right Section */}
//       <div className="w-2/3 text-left">
//         <p className="text-lg">
//           The annual International Conference on Public Health in Africa (CPHIA)
//           provides a unique African-led platform for leaders across the
//           continent to reflect on lessons learned in health and science, and
//           align on a way forward for creating more resilient health systems.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ConferenceSection;

import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "The quality of speakers and education sessions is top-notch. The sessions provided a perfect mix of strategic concepts for future planning and practical tips that I can implement today.",
    author: "HOLLY W",
    role: "Vice President Marketing, Proem Behavioral Health",
    gradient: "bg-gradient-to-b from-orange-300 to-orange-100",
  },
  {
    quote:
      "This was by far one of the most insightful conferences I’ve attended. Plenty of information that will directly benefit my company. A lot of takeaways!",
    author: "ALEX R",
    role: "CEO, Tech Innovations",
    gradient: "bg-gradient-to-b from-teal-300 to-teal-100",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        What People Are Saying
      </h2>
      <div className="relative flex justify-center items-center">
        {/* Testimonial Card */}
        <div
          className={`w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-md text-center ${testimonials[currentIndex].gradient}`}
        >
          <p className="text-xl italic font-light mb-6">
            “{testimonials[currentIndex].quote}”
          </p>
          <p className="font-semibold text-lg">
            {testimonials[currentIndex].author}
          </p>
          <p className="text-gray-500">{testimonials[currentIndex].role}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-6 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center"
          onClick={handlePrev}
        >
          ←
        </button>
        <button
          className="absolute right-6 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center"
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
