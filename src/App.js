import Expenses from "../src/components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "el",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 23),
    },

    {
      id: "e1",
      title: "Provision",
      amount: 65.12,
      date: new Date(2022, 4, 3),
    },

    {
      id: "e2",
      title: "Paperweights",
      amount: 4.65,
      date: new Date(2022, 5, 21),
    },

    {
      id: "e3",
      title: "LED TY",
      amount: 124.12,
      date: new Date(2022, 8, 13),
    },

    {
      id: "e4",
      title: "mac Book",
      amount: 543.22,
      date: new Date(2022, 7, 23),
    },

    {
      id: "e5",
      title: "Swim Pool",
      amount: 1984.12,
      date: new Date(2022, 2, 24),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("app");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
