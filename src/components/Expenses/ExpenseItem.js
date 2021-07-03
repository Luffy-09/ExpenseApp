import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //const expenseDate = new Date(2021, 2, 28);
  //const expenseTitle = 'Car Insurance';
  //const expenseAmount = 294.67;

  //const [title, setTitle] = useState(props.title);

  //let title = props.title;

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
