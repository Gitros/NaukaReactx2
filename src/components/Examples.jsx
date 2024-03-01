import { useState } from "react";

import TabButton from "../components/TabButton.jsx";
import Section from "./Section.jsx";

import { EXAMPLES, EXAMPLESTABLE } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  console.log(selectedTopic);
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        {EXAMPLESTABLE.map((item) => (
          <TabButton
            key={item}
            isSelected={selectedTopic === item}
            onClick={() => handleSelect(item)}
          >
            {item}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </Section>
  );
}
