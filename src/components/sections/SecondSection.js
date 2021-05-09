import TextInput from '../inputs/TextInput';
import PersonalInfo from '../subSections/PersonalInfo';

function SecondSection() {
  return (
    <div className="section">
      Second Section
      <br />
      <PersonalInfo />
      Emergency Contact
      <TextInput
        name="emergencyName"
        label="Name"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="emergencyPhone"
        label="Phone Number"
        min="2"
        max="20"
        size="10"
      />
      Guardian Info
      <TextInput
        name="guardianName"
        label="Name"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="guardianPhone"
        label="Phone"
        min="2"
        max="20"
        size="10"
      />
      Demographic Info
      <TextInput
        name="city"
        label="City"
        min="2"
        max="20"
        size="10"
      />
    </div>
  );
}

export default SecondSection;