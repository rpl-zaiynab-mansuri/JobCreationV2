import React, { useRef } from "react";
import Header from "./components/Header/Header";
import BlockSelection from "./components/BlockSelection/BlockSelection";
import JobConfiguration from "./components/JobConfiguration/JobConfiguration";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

const App: React.FC = () => {
  // Create references for each section
  const blockSelectionRef = useRef<HTMLDivElement>(null);
  const jobConfigurationRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 60, // Adjust the offset for fixed header
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Navigation />

        <div ref={blockSelectionRef} id="block-selection" className="mt-1">
          <BlockSelection />
        </div>

        <div ref={jobConfigurationRef} id="job-configuration" className="mt-1">
          <JobConfiguration />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
