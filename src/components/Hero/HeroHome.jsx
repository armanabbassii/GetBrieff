import React from "react";
import { Link } from "react-router-dom";

function HeroHome() {
  return (
    <section className="bg-black text-center mt-14 py-32 text-white border border-gray-500">
      <h1 className="text-5xl font-bold">
        <span className="text-red-500">GetBrief.</span> Conferences. Articles.
      </h1>

      <p className="mt-12 text-lg text-lime-400 font-semibold mx-auto leading-relaxed">
        Get inspired by the work of millions of top-rated designers &<br />
        agencies around the world.
        <br />
        Automatically run them in your continuous integration builds.
      </p>
    </section>
  );
}

export default HeroHome;
