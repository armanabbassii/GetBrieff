import React from "react";

function ConferenceSection() {
  return (
    <div className="w-full flex justify-between items-center bg-gray-100 px-8 py-10">
      {/* Left Section */}
      <div className="w-1/3 text-left mr-10">
        {" "}
        {/* Added margin-right */}
        <h2 className="text-2xl font-bold">
          Thank you for joining us at CPHIA 2023!
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-2/3 text-left">
        <p className="text-lg">
          The annual International Conference on Public Health in Africa (CPHIA)
          provides a unique African-led platform for leaders across the
          continent to reflect on lessons learned in health and science, and
          align on a way forward for creating more resilient health systems.
        </p>
      </div>
    </div>
  );
}

export default ConferenceSection;
