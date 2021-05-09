function TextInput(props) {
  return (
    <div>
      <label for={props.name}>{props.label}: </label>
      <input type="text" id={props.name} name={props.name} minLength={props.min} maxLength={props.max} size={props.size} />
    </div>
  );
}

export default TextInput;