import React, { useContext } from "react";

import "../App.css";

const List = ({ title, desc, deleteTask, id, editTitle, editDesc }) => {
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
              editTitle(id);
            }}
          >
            Edit title
          </button>
          <button
            className="btn btn"
            onClick={() => {
              editDesc(id);
            }}
          >
            Edit desc
          </button>
        </li>
      </ul>
    </>
  );
};

export default List;
