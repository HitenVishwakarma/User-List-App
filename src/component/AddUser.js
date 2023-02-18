import { useState } from "react";
import { Button } from "../UI/Button";
import "./AddUser.css";

export const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    const goal = {
      name: enteredName,
      age: enteredAge,
      id: enteredName,
    };
    props.onAddGoal(goal);
  };

  return (
    <div className="input">
      <form onSubmit={formSubmitHandler}>
        <label>User Name</label>
        <input type="text" value={enteredName} onChange={userNameHandler} />
        <label>Age(Years)</label>
        <input type="text" value={enteredAge} onChange={userAgeHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </div>
  );
};
