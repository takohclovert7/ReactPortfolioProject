import React ,{useState} from "react";

const Button = () => {
    const [inputText, setInputText] = useState('');
    const [buttonVisible, setButtonVisible] = useState(false);
    const [correctString, setCorrectString] = useState('correct string');
    const [otherButtonVisible, setOtherButtonVisible] = useState(false);
  
    const handleChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleClick = () => {
      setButtonVisible(true);
    };
  
    const handleSubmit = () => {
      if (inputText === correctString) {
        setButtonVisible(false);
        setOtherButtonVisible(true);
      }
    };
  
    return (
      <div>
        <button
          onClick={handleClick}
        >
          Click me!
        </button>
        {buttonVisible && (
          <div>
            <input
              type="text"
              value={inputText}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}
        {otherButtonVisible && (
          <button>Other Button</button>
        )}
      </div>
    );
  };
  
  export default Button;
  