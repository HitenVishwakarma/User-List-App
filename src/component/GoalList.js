import "./GoalList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const GoalList = (props) => {
  return (
    <ul>
      {props.onAddList.map((item) => (
        <li className="goal" key={item.name}>
          {`${item.name} ${item.age}(Years old)`}
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => props.onDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};
