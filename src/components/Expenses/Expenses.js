import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const changedYearHandler = (selectedFilter) => {
    setSelectedYear(selectedFilter);
  };

  return (
    <div>
      <Card className="expenses ">
        <ExpensesFilter
          defaultYear={selectedYear}
          onSaveYear={changedYearHandler}
        />
        {props.items.map( expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
