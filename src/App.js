import React, { useState } from "react";
import { AddUser } from "./component/AddUser";
import { GoalList } from "./component/GoalList";

function App() {
  const [userList, setUserList] = useState([]);

  const addGoalHandler = (list) => {
    setUserList((prevUserList) => {
      return [...prevUserList, list];
    });
  };

  const listDeleteHandler = (id) => {
    setUserList((prevList) => {
      const filterAfterDelete = prevList.filter((item) => item.id !== id);
      return filterAfterDelete;
    });
    // setUserList(filterAfterDelete);
    // console.log(userList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <AddUser onAddGoal={addGoalHandler} />
      <GoalList onAddList={userList} onDelete={listDeleteHandler} />
    </div>
  );
}

export default App;
