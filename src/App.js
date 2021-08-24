import React, {useState} from 'react';
import './App.css';
import Compute from './components/compute/Compute';
import ListA from './components/ListA/ListA';
import ListB from './components/ListB/ListB';
function App() {
  const [item1, setItem1] = useState([])
  const [item2, setItem2] = useState([])
  const [inputtext1 , setinputtext1] = useState("")
  const [inputtext2 , setinputtext2] = useState("")
  return (
    <div className="App">
      <div className="listContainer">
        <ListA item={item1} setItem={setItem1} inputtext={inputtext1} setinputtext={setinputtext1} />
        <ListB item={item2} setItem={setItem2} inputtext={inputtext2} setinputtext={setinputtext2} />
      </div>
      <div className="computeContainer">
        <Compute item1={item1} item2={item2} />
      </div>
    </div>
  );
}

export default App;
