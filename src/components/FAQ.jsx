// FAQSection.js

import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import {FAQs} from "../constants/FAQ"

      {/* FAQ Section */}

function FAQSection() {
  return (
    <section className="bg-gray-100 pt-7">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>

        {FAQs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              {section.items.map((item, itemIdx) => (
                <Disclosure key={itemIdx} as="div" className="border-b last:border-none">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex justify-between items-center w-full text-left py-4 ${
                          item.disabled ? "text-gray-400" : "text-gray-900"
                        }`}
                        disabled={item.disabled}
                      >
                        <span>{item.question}</span>
                        <span>
                          {open ? (
                            <MinusSmallIcon className="h-5 w-5 text-gray-900" />
                          ) : (
                            <PlusSmallIcon className="h-5 w-5 text-gray-900" />
                          )}
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="py-2 text-left text-gray-600">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
