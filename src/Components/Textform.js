import React, { useState } from 'react';
import Navbar from './Navbar';

function Textform(props) {
  const changetextvalue = (event) => {
    settext(event.target.value);
  };
  const upconverter = () => {
    let newText = text.toUpperCase();
    settext(newText);
    props.set('Converted to uper caase', 'Success');
  };
  const loconverter = () => {
    let newText = text.toLowerCase();
    settext(newText);
    props.set('Coverted to tower case', 'Success');
  };
  const [text, settext] = useState('enter the value');
  return (
    <>
      <div className="container my-4">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="box"
            rows="8"
            onChange={changetextvalue}
          ></textarea>
          <button className="btn btn-primary mx-1 my-1" onClick={upconverter}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-1" onClick={loconverter}>
            Convert to Uppercase
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
        >
          <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            {text.split(' ').length} word and {text.length} char
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Textform;
