import { useState } from "react";
import { EXAMPLES } from "./data.js";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  console.log("APP COMPONENT EXECUTING");

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
