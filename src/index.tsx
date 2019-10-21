import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import Pps from "./pps/Pps";

function App() {
  const items = ["aze", "ert", "art"];
  return (
    <div>
      Hello PPS
      <Pps
        items={items}
        components={{
          Card: Card,
          Filters: Filters
        }}
      />
    </div>
  );
}

const Card = ({ item }) => (
  <div style={{ border: "1px solid black" }}>{item}</div>
);

// TODO remodel actions and filter list, unable to use text filter
const Filters = ({ addFilter, rmFilter }) => {
  const [isAChecked, setIsAChecked] = React.useState(false);
  const [isNotBChecked, setIsNotBChecked] = React.useState(false);
  const containsA = it => it.includes("a");
  const containsRT = it => it.includes("rt");
  return (
    <div>
      includes letter A
      <input
        type="checkbox"
        onClick={() => {
          !isAChecked ? addFilter(containsA) : rmFilter(containsA);
          setIsAChecked(isAChecked => !isAChecked);
        }}
      />
      <br />
      Includes RT
      <input
        type="checkbox"
        onClick={() => {
          !isNotBChecked ? addFilter(containsRT) : rmFilter(containsRT);
          setIsNotBChecked(isNotBChecked => !isNotBChecked);
        }}
      />
      <br />
      Filter by text:
      <input type="text" />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
