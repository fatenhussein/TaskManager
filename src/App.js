import { useState, useEffect, createContext } from "react";
import "./App.css";
import List from "./components/List";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [item, setItem] = useState({ id: "", title: "", desc: "" });
  const [items, setItems] = useState([]);

  const handleChangeTitle = (e) => {
    setItem({ ...item, title: e.target.value });
  };
  const handleChangeDesc = (e) => {
    setItem({ ...item, desc: e.target.value }); 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem({ ...item, id: Date.now() + Math.random() });

    setItems([...items, item]);
    localStorage.setItem("items", JSON.stringify(items));
  };
  const deleteTask = (id) => {
    setItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
    localStorage.setItem("items", JSON.stringify(items));
  };
  const editTask = (id) => {
    const editTitle = item.title;
    const editDesc = item.desc;

    let currentItem = items.find((item) => item.id === id);
    currentItem.title = editTitle;
    currentItem.desc = editDesc;
    setItem({ ...item, currentItem });
    localStorage.setItem("items", JSON.stringify(items));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items"));
    if (data) {
      setItems(data);
    }
    console.log(data);
  }, []);

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChangeTitle} />
          <label htmlFor="item">descrption</label>
          <input type="text" id="item" onChange={handleChangeDesc} />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Task manager </h1>
      <ul className="list">
        <li>
          <label>Title</label>
          <label>Decription</label>
        </li>
        {items.map((item, index) => {
          return (
            <List
              title={item.title}
              desc={item.desc}
              key={index}
              id={item.id}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
