import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewGame";
import Expenses from "./components/Expenses/Games";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Football",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    section: "CSE",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
