import BpmnViewerComponent from "./BpmnViewerComponent";
import React, { useState } from 'react';
import Counter from "./Counter";



function App() {
  const [count, setCount] = useState(1);
  const incrementCounter = () => setCount(count + 1);


  return (
          <div>
          <Counter/>
          <BpmnViewerComponent incrementCounter={incrementCounter}/>
          </div>
  );
}

export default App;