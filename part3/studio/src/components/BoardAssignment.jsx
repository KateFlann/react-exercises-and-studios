import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    { label: "recipes", value: "recipes" },
    { label: "funny", value: "funny" },
    { label: "strange", value: "strange" },
  ];

  const handleChange = (event) => {
    const [boardName, setBoardName] = useState("no boards yet!");
    // boardName = event.target.value ?
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map(label)}
        <option key={boards.label} value={appropriateValue}></option>
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
