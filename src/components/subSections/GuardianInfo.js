import Name from '../subSections/Name';
import Address from '../subSections/Address';
import DropDown from '../inputs/DropDown';

function GuardianInfo() {
  return(
    <div>
      Guardian Info
      <Name />
      <Address />
      <DropDown
        name="relationship"
        label="Relationship"
        options={
          [
            "Select",
            "Parent",
            "Other Family",
            "Court Appointed",
          ]
        }
      />
    </div>
  );
}

export default GuardianInfo;