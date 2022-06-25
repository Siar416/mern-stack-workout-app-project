import { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/workouts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ title, reps, load }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Workout Type:{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Workout type"
        />
      </label>
      <br />
      <label>
        Reps:{" "}
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="Workout type"
        />
      </label>
      <br />
      <label>
        load:{" "}
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          placeholder="Workout type"
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Form;
