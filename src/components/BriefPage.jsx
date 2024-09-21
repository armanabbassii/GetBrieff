import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import HeroSection from "./HeroSection";
import FAQ from "./FAQ";


function BriefPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection/>
      {/* FAQ Section */}
      <FAQ/>
    </div>
  );
}

export default BriefPage;
