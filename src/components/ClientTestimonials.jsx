import React from "react";
import testimonials from "../data/testimonials";

const ClientTestimonials = () => {
  return (
    <section className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
      <p className="text-center mb-12">
        Our clients tell us about their experiences of working with us and the impact our services have had on their companies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-[#ff96c7] shadow-md rounded-lg p-6">
            
            <div className="flex items-center mb-4">
              <img
                src={testimonial.logo}
                alt={`${testimonial.company} logo`}
                className="w-12 h-12 mr-4"
              />
              <p className="font-bold text-lg text-gray-700">{testimonial.company}</p>
            </div>
            <p className="text-gray-700 mb-4">{testimonial.description}</p>
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-4"
              />
             
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
