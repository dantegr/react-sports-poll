import React, {useState} from 'react';
import '../styles/App.css';
import Events from './Events';

const App = () => {

  const [platformValue, plaftormInputProps] = useRadioButtons("platform");

  function useRadioButtons(name) {
    const [value, setState] = useState(null);
  
    const handleChange = e => {
      setState(e.target.value);
    };
  
    const inputProps = {
      name,
      type: "radio",
      onChange: handleChange
    };
  
    return [value, inputProps];
  }
  return (
    <div className="App">
      <h1>Sports Poll</h1>
      <p>Sport:Football</p>
      <p> Paok vs Panthrakikos</p>

      <p>Who will win?</p>

      <form>
     <fieldset>
          Paok
          <input
            value="windows"
            checked={platformValue === "windows"}
            {...plaftormInputProps}
          />
          Draw
          <input
            value="mac"
            checked={platformValue === "mac"}
            {...plaftormInputProps}
          />
          Panthrakikos
          <input
            value="linux"
            checked={platformValue === "linux"}
            {...plaftormInputProps}
          />
        </fieldset>
      </form>

      <button>Next Event</button>

      <Events />


    </div>
  );
}

export default App;
