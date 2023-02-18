import "./Button.css";

export const Button = (props) => {
  //   console.log("clicked", props.onClick);
  return (
    <button type={props.type} onClick={props.onClick} className="button">
      {props.children}
    </button>
  );
};
