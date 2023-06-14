import React, { useContext } from "react";

import "../App.css";

const List = ({ title, desc, deleteTask, id, editTask}) => {
  return (
    <>
      <ul className="list">
        <li>
          <label>{title}</label>
          <label>{desc}</label>

          <button
            className="btn btn-danger"
            onClick={() => {
              deleteTask(id);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn"
            onClick={() => {
              editTask(id);
            }}
          >
            Edit 
          </button>
          
        </li>
      </ul>
    </>
  );
};

export default List;
