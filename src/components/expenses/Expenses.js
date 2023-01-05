import ExpenseItem from "../expenses/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear("expense");
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />

        {props.items.map((Expenses, index) => (
          <ExpenseItem
            key={index}
            title={Expenses.title}
            amount={Expenses.amount}
            date={Expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
