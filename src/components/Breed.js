import "./css/Breed.css";
import * as React from "react";
import PuppyGrid from "./PuppyGrid";
import { useEffect, useState } from "react";
import { apiGetAllDogBreeds, apiGetRandomImage } from "./api";

export default function Breed() {
  let [puppies, setPuppies] = useState([]);

  useEffect(() => {
    apiGetAllDogBreeds().then((rsp) => {
      let pushPuppies = [];
      let length = Object.entries(rsp.data.message).length;
      Object.entries(rsp.data.message).forEach((entry, index) => {
        if (entry[1].length === 0) {
          apiGetRandomImage(entry[0]).then((imageRsp) => {
            pushPuppies.push({
              firstName: "",
              lastName: entry[0],
              image: imageRsp.data.message,
            });
            if (index === length - 1) {
              setPuppies(pushPuppies);
            }
          });
        }
        if (entry[1].length > 0) {
          entry[1].forEach((subPup, subIndex) => {
            apiGetRandomImage(entry[0], subPup).then((imageRsp) => {
              pushPuppies.push({
                firstName: subPup,
                lastName: entry[0],
                image: imageRsp.data.message,
              });
              if (index === length - 1 && subIndex === entry[1].length - 1) {
                setPuppies(pushPuppies);
              }
            });
          });
        }
      });
    });
  }, []);

  return (
    <main>
      <h2>It's Dogs List</h2>
      <header>
        <PuppyGrid puppies={puppies} />
      </header>
    </main>
  );
}
