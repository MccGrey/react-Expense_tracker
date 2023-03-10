import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((Expenses) => (
        <ExpenseItem
          key={Expenses.id}
          title={Expenses.title}
          amount={Expenses.amount}
          date={Expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
