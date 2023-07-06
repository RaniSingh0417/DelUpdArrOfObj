import { useState } from "react";
const Cricketer = () => {
  const [cricketer, setcricketer] = useState([
    "Virat Kohli",
    "MS Dhoni",
    "Surya kumar Yadav",
  ]);

  //   Add a new cricketer name
  const handleAdd = () => {
    const newcricketer = [...cricketer];
    newcricketer.push("Rohit Sharma");
    setcricketer(newcricketer);
  };

  //   rempve any cricketer
  const handleRemove = (c) => {
    const oldcricketer = [...cricketer];
    const newcricketer = oldcricketer.filter((a, i) => a !== c);

    setcricketer(newcricketer);
  };

  //   Update any cricketer
  const handleUpdate = (c) => {
    const oldcricketer = [...cricketer];
    const newcricketer = [];
    for (let i = 0; i < oldcricketer.length; i++) {
      if (oldcricketer[i] === c) {
        oldcricketer[i] = "cricketer";
      }
    }
    setcricketer(oldcricketer);
  };

  return (
    <>
      <h1>Cricketers:</h1>
      {cricketer.map((b, i) => {
        return (
          <ul>
            <li>{b}</li>
            <button type="button" onClick={() => handleRemove(b)}>
              Remove {b}
            </button>
            <button type="button" onClick={() => handleUpdate(b)}>
              Update
            </button>
          </ul>
        );
      })}
      <button type="button" onClick={() => handleAdd()}>
        Add Cricketer
      </button>
    </>
  );
};
export default Cricketer;
