function RadioButtons(props) {
  return (
    <div>
      <div>
        <input type="radio" id="yes" value="yes" name={props.name} />
        <label for="yes">Yes</label>
      </div>
      <div>
        <input type="radio" id="no" value="no" name={props.name} />
        <label for="no">No</label>
      </div>
    </div>
  );
}

export default RadioButtons;