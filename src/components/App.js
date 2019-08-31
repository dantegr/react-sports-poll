import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css';


const App = () => {

  const [platformValue, plaftormInputProps] = useRadioButtons("platform");
  
  const [data, setData] = useState({ events: [] });

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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://s3-eu-west-1.amazonaws.com/test-assignment/test-assignment.json',
      );
    
      setData({events: result.data});
       
      };
      fetchData();
    }, []);


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

      <ul>
            {data.events.map(event =>( <li key={event.id}>{event.name}</li>))}
      </ul>


    </div>
  );
}

export default App;
