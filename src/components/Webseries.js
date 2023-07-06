import React from "react";
import { useState } from "react";
const Webseries = () => {
  const [webseries, setwebseries] = useState([
    {
      Webseires_Name: "Tandav",
      Streaming_Platform: "Amazon Prime Video",
      IMDB_Rating: 4.6,
    },
    {
      Webseires_Name: "Sacred Games",
      Streaming_Platform: "Netflix",
      IMDB_Rating: 8.5,
    },
    {
      Webseires_Name: "Code M",
      Streaming_Platform: "Voot",
      IMDB_Rating: 7.5,
    },
  ]);

  //   Add a new webseries
  const addSeries = () => {
    const newSeries = [...webseries];
    newSeries.push({
      Webseires_Name: "The Great Indian Murderer",
      Streaming_Platform: "Disney Plus Hotstar",
      IMDB_Rating: 6.8,
    });
    setwebseries(newSeries);
  };

  //   Delete Any Webseries
  const handleDel = (a, i) => {
    const oldSeries = [...webseries];
    const newSeries = oldSeries.filter((b, i) => b !== a);
    setwebseries(newSeries);
  };

  //   Update the Rating of each Webseries

  // Wrong Way
  //   const handleUpd = (a, i) => {
  //     const oldSeries = [...webseries];
  //     a.IMDB_Rating = 9;
  //     // for (let b of oldSeries) {
  //     //   b.IMDB_Rating = 9;
  //     // }
  //     setwebseries(oldSeries);
  //   };
  //

  const handleUpd = (a, i) => {
    const oldSeries = [...webseries];

    // it is also working but only in array of obj not for array

    // for (let c of oldSeries) {
    //   if (c === a) {
    //     a.IMDB_Rating = 9;
    //   }
    // }

    for (let i = 0; i < oldSeries.length; i++) {
      if (oldSeries[i] === a) {
        a.IMDB_Rating = 9;
      }
    }
    setwebseries(oldSeries);
  };

  // Update The rating of All Webseries

  const handleUpdAll = () => {
    const oldSeries = [...webseries];
    for (let b of oldSeries) {
      b.IMDB_Rating = 10;
    }
    setwebseries(oldSeries);
  };
  return (
    <>
      <h1>Some of the most watched Series are:</h1>
      {webseries.map((c, i) => {
        return (
          <ul>
            <li type="none">{i + 1}.</li>
            <li>Webseries: {c.Webseires_Name}</li>
            <li>Streaming Platform: {c.Streaming_Platform}</li>
            <li> IMDB Rating: {c.IMDB_Rating}</li>
            <button type="button" onClick={() => handleDel(c, i)}>
              Delete {c.Webseires_Name}
            </button>
            <button type="button" onClick={() => handleUpd(c, i)}>
              Update Rating
            </button>
          </ul>
        );
      })}
      <button type="button" onClick={() => addSeries()}>
        Add Webseries
      </button>
      <button type="button" onClick={() => handleUpdAll()}>
        Update Rating
      </button>
    </>
  );
};
export default Webseries;
