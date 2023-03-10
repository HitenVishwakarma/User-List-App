import { Button } from "../UI/Button";
import "./ErrorModal.css";

export const ErrorModal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </div>
    </div>
  );
};
