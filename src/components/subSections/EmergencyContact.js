import TextInput from '../inputs/TextInput';

function EmergencyContact() {
  return(
    <div>
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
    </div>
  );
}

export default EmergencyContact;