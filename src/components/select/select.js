import "./select.css";

function Select ({className = "", children, ...props}) {
  return (
    <select className={"select " + className} {...props}>
    {children}
    </select>
  );
}

export default Select;