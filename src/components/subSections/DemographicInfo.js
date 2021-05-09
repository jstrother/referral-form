import TextInput from '../inputs/TextInput';
import DropDown from '../inputs/DropDown';

function DemographicInfo() {
  return(
    <div>
      Demographic Info
      <DropDown 
        name="gender"
        label="Gender"
        options={
          [
            "Select",
            "Male",
            "Female",
            "Non-Binary"
          ]
        }
      />
      <TextInput
        name="pronouns"
        label="Which pronouns do you prefer?"
        min="2"
        max="20"
        size="10"
      />
    </div>
  );
}

export default DemographicInfo;