import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

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
    <Section title="Examples" id="examples" className="">
      <menu>
        <TabButton
          label="Components"
          isSelected={selectedTopic === "components"}
          onClick={() => handSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          label="JSX"
          isSelected={selectedTopic === "jsx"}
          onClick={() => handSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          label="Props"
          isSelected={selectedTopic === "props"}
          onClick={() => handSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          label="State"
          isSelected={selectedTopic === "state"}
          onClick={() => handSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
