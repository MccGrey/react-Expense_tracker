import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses() {
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

  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />

      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
    </div>
  );
}

export default Expenses;
