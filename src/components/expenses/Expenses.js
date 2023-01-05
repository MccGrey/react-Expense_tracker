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

  const filteredExpenses = props.items.filter((Expenses) => {
    return Expenses.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />

        {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((Expenses) => (
            <ExpenseItem
              key={Expenses.id}
              title={Expenses.title}
              amount={Expenses.amount}
              date={Expenses.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
