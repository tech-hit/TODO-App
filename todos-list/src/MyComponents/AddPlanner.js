import React, { useState } from "react";

export const AddPlanner = ({ addPlanner }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addPlanner(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a Planner</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Planner Title
          </label>
          <input
            type="text"
            value={title}
            placeholder="add title"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Planner Description
          </label><br />
          <textarea id="w3review" name="w3review" placeholder="add description here" className="form-control" rows="4" cols="184"/>
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Planner
        </button>
      </form>
      <hr />
    </div>
  );
};
