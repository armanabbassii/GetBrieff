import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    category: "Application & Timeline",
    items: [
      {
        question: "When will I hear if my abstract has been accepted?",
        answer: "You will be notified by email by January 2025.",
      },
      {
        question: "Can I make edits to my submission?",
        answer: "Yes, you can make edits until the submission deadline.",
        disabled: true,
      },
    ],
  },
  {
    category: "Registration, Travel, & Scholarships",
    items: [
      {
        question: "Do abstract presenters need to attend the conference in person?",
        answer: "No, you can present virtually.",
      },
      {
        question: "Are scholarships available for abstract presenters?",
        answer: "Yes, scholarships are available. Please visit the scholarships page for more information.",
      },
    ],
  },
];

function BriefPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center bg-blue-200 w-full z-10 py-60">
        <h1 className="text-5xl font-bold mb-5">Welcome to the Brief</h1>
      </section>

      {/* FAQ Section */}
      <section className="text-center bg-gray-100 py-20 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>

          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                {section.items.map((item, itemIdx) => (
                  <Disclosure key={itemIdx} as="div" className="border-b last:border-none">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex justify-between items-center w-full text-left py-4 ${
                            item.disabled ? 'text-gray-400' : 'text-gray-900'
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
                        <Disclosure.Panel className="py-2 text-gray-600">
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
    </div>
  );
}

export default BriefPage;
