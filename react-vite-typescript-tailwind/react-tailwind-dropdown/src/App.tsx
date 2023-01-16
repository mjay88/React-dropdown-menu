import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import AccordionCopy from "./components/AccordionCopy";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <AccordionCopy />
    </div>
  );
}

export default App;
