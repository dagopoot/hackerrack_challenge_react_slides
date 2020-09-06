import React, { useState, useEffect } from "react";

function Slides({ slides }) {
  const [index, setIndex] = useState(0);
  const [restartAvailable, setRestarAvailable] = useState(false);
  const [prevAvailable, setPrevAvailable] = useState(false);
  const [nextAvailable, setNextAvailable] = useState(true);

  const initialSetup = function(){
    setIndex(0);

    if (slides.length > 0) {
        setNextAvailable(true);
    }
  
    setRestarAvailable(false)
    setPrevAvailable(false)
  }

  const handleRestart = function () {
    initialSetup()
  };

  const handleNext = function () {
    if (index < slides.length - 1) {
      setIndex(index + 1);
      setRestarAvailable(true)
      setPrevAvailable(true)
    }
    
    if(index  + 1 === slides.length - 1){
        setNextAvailable(false)
    }
  };

  const handlePrev = function () {
    if (index > 0) {
      setIndex(index - 1);

      setNextAvailable(true)
    }

    if((index - 1) === 0){
        setPrevAvailable(false)
        setRestarAvailable(false)
    }
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={!restartAvailable}
          data-testid="button-restart"
          onClick={handleRestart}
          className="small outlined"
        >
          Restart
        </button>
        <button
          disabled={!prevAvailable}
          data-testid="button-prev"
          onClick={handlePrev}
          className="small"
        >
          Prev
        </button>
        <button
          disabled={!nextAvailable}
          data-testid="button-next"
          onClick={handleNext}
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
