import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./GamesFilter";
import ExpensesList from "./GameList";
import ExpensesChart from "./GamesChart";
import "./Games.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("CSE");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.section === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <h2>Your Games</h2>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
