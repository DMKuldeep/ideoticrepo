import React from "react";
import { useEffect, useState } from "react";
const RandomPic = () => {
  let [dog, setDog] = useState(null);
  var imag;

  useEffect(() => {
    var imag = "https://dog.ceo/api/breeds/image/random";
    fetch(imag)
      .then((response) => response.json())
      .then((data) => setDog(data));
  }, [imag]);

  return (
    <div className="App">
      {dog && (
        <img
          src={dog.message}
          alt="dhjs"
          style={{ width: "40vw", height: "60vh", marginTop: "13vh" }}
        />
      )}
    </div>
  );
};

export default RandomPic;
