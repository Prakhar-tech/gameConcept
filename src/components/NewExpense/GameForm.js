import React, { useState } from "react";

import "./GameForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSection, setEnteredSection] = useState("CSE");
  const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    enteredSection: "CSE",
  });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const sectionChangeHandler = (event) => {
    setEnteredSection(event.target.value);
    setUserInput({
      ...userInput,
      enteredSection: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,

      date: new Date(enteredDate),
      section: enteredSection,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredSection("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Game</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        {
          <div className="new-expense__control">
            <label>Section</label>
            {/* <select
              
              type="text"
              value={enteredSection}
              onChange={sectionChangeHandler}
            /> */}
            <select value={enteredSection} onChange={sectionChangeHandler}>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
            </select>
          </div>
        }
        <div className="new-expense__control">
          {/* <label>Date</label> */}
          {/* <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value="2021-12-31"
            onChange={dateChangeHandler}
          /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Game</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
