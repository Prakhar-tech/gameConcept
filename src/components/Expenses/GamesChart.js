import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Football", value: 0 },
    { label: "Hockey", value: 0 },
    { label: "Tennis", value: 0 },
    { label: "Cricket", value: 0 },
    { label: "Kabaddi", value: 0 },
    { label: "BasketBall", value: 0 },
    { label: "Chess", value: 0 },
    { label: "Badminton", value: 0 },
  ];
  let i = 0;

  for (const expense of props.expenses) {
    if (expense.title === chartDataPoints[6].label) {
      chartDataPoints[6].value += 1;
    }
    if (expense.title === chartDataPoints[1].label) {
      chartDataPoints[1].value += 1;
    }
    if (expense.title === chartDataPoints[2].label) {
      chartDataPoints[2].value += 1;
    }
    if (expense.title === chartDataPoints[3].label) {
      chartDataPoints[3].value += 1;
    }
    if (expense.title === chartDataPoints[4].label) {
      chartDataPoints[4].value += 1;
    }
    if (expense.title === chartDataPoints[5].label) {
      chartDataPoints[5].value += 1;
    }
    if (expense.title === chartDataPoints[6].label) {
      chartDataPoints[6].value += 1;
    }
    if (expense.title === chartDataPoints[7].label) {
      chartDataPoints[7].value += 1;
    }
    if (expense.title === chartDataPoints[0].label) {
      chartDataPoints[0].value += 1;
    }
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
