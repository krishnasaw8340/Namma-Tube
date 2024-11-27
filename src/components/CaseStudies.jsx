import React from "react";
import caseStudies from "../data/caseStudies";

const CaseStudies = () => (
  <section className="w-full py-12 bg-white">
    <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
      {caseStudies.map((caseStudy) => (
        <div
          key={caseStudy.id}
          className={`p-6 ${caseStudy.bgColor} text-white rounded-lg flex flex-col items-center`}
        >
          <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
          <img src={caseStudy.image} alt={caseStudy.title} className="w-24 h-24" />
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudies;
