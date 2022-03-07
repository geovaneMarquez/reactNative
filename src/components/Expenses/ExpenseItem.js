import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // this is a react hook, must be called inside function
  // components, and not nested or outside
  // first element: is a pointer at the value "props.title"
  // second element: a function which we can call to set new title
  // useState always returns an array with 2 elements

  function clickHandler() {
    setTitle("Updated");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
