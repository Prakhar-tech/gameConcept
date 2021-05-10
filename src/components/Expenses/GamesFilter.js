import React from "react";

import "./GamesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Section</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
