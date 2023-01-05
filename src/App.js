import { useState } from "react";
import Expenses from "../src/components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 23),
  },

  {
    id: "e2",
    title: "Provision",
    amount: 65.12,
    date: new Date(2022, 4, 3),
  },

  {
    id: "e3",
    title: "Paperweights",
    amount: 4.65,
    date: new Date(2022, 5, 21),
  },

  {
    id: "e4",
    title: "LED TY",
    amount: 124.12,
    date: new Date(2022, 8, 13),
  },

  {
    id: "e5",
    title: "mac Book",
    amount: 543.22,
    date: new Date(2022, 7, 23),
  },

  {
    id: "e6",
    title: "Swim Pool",
    amount: 1984.12,
    date: new Date(2022, 2, 24),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

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
}

export default App;
