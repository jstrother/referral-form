function DropDown(props) {
  const options = props.options;
  const optionsList = options.map((option, index) =>
    <option
      key={index}
      value={
        option !== "Select"
          ? option
          : null
      }
    >
      {option}
    </option>
  );
  return (
    <div>
      <label for={props.name}>{props.label} </label>
      <select name={props.name} id={props.name}>
        {optionsList}
      </select>
    </div>
  );
}

export default DropDown;