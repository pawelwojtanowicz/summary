import React, {useState} from 'react';
import Hello from './sayHallo';
import Tweet from './Tweet';
import Toggle from './Toggle.js';
import Toggle2 from './Toggle2.js';
import Inputs from './Inputs.js'

function App (){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }
  return(
    <div className='app'>
      {/*<h1>This is the app component</h1>
      <Hello />
      <br/>
      <br/>*/}
      {/*<Tweet name="Pawel" message="Something" tweetno="23"/>
      <Tweet name="Aga" message="Something else" tweetno="12"/>
      <Tweet name="Ola" message="Something else more" tweetno="34"/>
      <Tweet name="Kuba" message="Something else more and more" tweetno="90"/>*/}
      <h1 className={isRed ? 'red' : ''}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      <Toggle />

      <Toggle2 />

      <Inputs />

    </div>
  );
}
export default App;