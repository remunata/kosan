import { useState } from "react";
import { Criteria, getCriterias } from "./data/Criterias";
import { Alternative, getAlternatives } from "./data/Alternatives";
import { getMatrix } from "./data/Matrix";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Criterias from "./components/Criterias";
import Alternatives from "./components/Alternatives";
import Matrix from "./components/Matrix";
import Calculations from "./components/calculations/Calculations";
import Footer from "./components/Footer";

function App() {
  const [criterias, setScriterias] = useState<Criteria[]>(getCriterias());
  const [alternatives, setAlternatives] = useState<Alternative[]>(
    getAlternatives()
  );
  const [matrix, setMatrix] = useState(getMatrix());
  const [showCalculation, setShowCalculation] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <Hero />
        <div className="w-full flex items-start py-16 gap-10" id="calculation">
          <Criterias criterias={criterias} setCriterias={setScriterias} matrix={matrix} setMatrix={setMatrix} setShowCalculation={setShowCalculation} />
          <Alternatives
            alternatives={alternatives}
            setAlternatives={setAlternatives}
            matrix={matrix}
            setMatrix={setMatrix}
            setShowCalculation={setShowCalculation}
          />
        </div>
        <Matrix
          criterias={criterias}
          Alternatives={alternatives}
          matrix={matrix}
          setMatrix={setMatrix}
          setShowCalculation={setShowCalculation}
        />
        <div className="w-full my-10 px-10">
        <button
          onClick={() => setShowCalculation(true)}
          className="my-5 font-bold text-xl w-full py-2 bg-sky-600 text-white rounded-sm hover:bg-white hover:outline hover:outline-1 hover:outline-sky-600 hover:text-sky-600 transition-colors cursor-pointer"
        >
          Calculate
        </button>
        </div>
        {showCalculation && (
          <Calculations
            criterias={criterias}
            alternatives={alternatives}
            matrix={matrix}
          />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
