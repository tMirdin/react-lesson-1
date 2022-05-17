import React from "react";
import Example from "./Components/Example";

const App = () => {
  function getInfo(props) {
    console.log(props);
  }
  return (
    <>
      <Example name="React" company="meta" getInfo={getInfo}>
        <button>Включите воду</button>
      </Example>

      <Example name="Library" company="facebook" />
      <Example name="Framework" company="spaceX" />
    </>
  );
};

export default App;
