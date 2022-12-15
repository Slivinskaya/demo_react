import React, { useState } from "react";
import ReadOnly from "./ReadOnly";
import { nanoid } from "nanoid";
import data from "./data.json";
import "./List.css";


const List = () => {
  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
  });

  function handleAddFormChange(event) {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      title: addFormData.title,
    };

    const newItems = [...items, newContact];
    setItems(newItems);
  };

  const handleDeleteClick = (contactId) => {
    const newItems = [...items];

    const index = items.findIndex((item) => item.id === contactId);

    newItems.splice(index, 1);

    setItems(newItems);
  };

  const del = () => {
    handleDeleteClick(items.length);
  };
  return (
    <div>
      <form style={{ display: "flex", margin: 10, width: 500}}>
        <div className="listHeader">Количество: {items.length}</div>
        </form>
      <form>        
        {items.map((item) => (
          <div className="listItem">
            <ReadOnly item={item} />
          </div>
        ))}
      </form>
      <form
        onSubmit={handleAddFormSubmit}
        style={{ display: "flex", margin: 10, width: 500}}
      >
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter"
          onChange={handleAddFormChange}
        />
        <button type="submit" style={{ margin: 5}}>Добавить</button>
        <button 
        type="button" style={{ margin: 5}}
        onClick={() => del()}>Удалить</button>
      </form>
    </div>
  );
};
export default List;