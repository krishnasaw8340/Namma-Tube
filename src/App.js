import React from 'react'

import Header from "./components/Header";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import CaseStudies from "./components/CaseStudies";
import ClientTestimonials from "./components/ClientTestimonials";
import PlanSuccess from "./components/PlanSuccess";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OurServices />
      <CaseStudies />
      <ClientTestimonials />
      <PlanSuccess />
      <Footer />
    </div>
  )
}

export default App