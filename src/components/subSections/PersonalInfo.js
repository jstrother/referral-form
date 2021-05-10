import TextInput from '../inputs/TextInput';
import Name from '../subSections/Name';
import Address from '../subSections/Address';

function PersonalInfo() {
  return (
    <div>
      Personal Info
      <Name />
      <Address />
      <TextInput
        name="birthday"
        label="Birthday"
        min="5"
        max="10"
        size="11"
      />
      <TextInput
        name="ssn"
        label="Social Security Number"
        min="11"
        max="11"
        size="11"
      />
      <TextInput
        name="phone"
        label="Phone Number"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="email"
        label="Email"
        min="2"
        max="20"
        size="10"
      />
    </div>
  );
}

export default PersonalInfo;