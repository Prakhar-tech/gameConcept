import React from "react";

import Card from "../UI/Card";
import "./GameItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
