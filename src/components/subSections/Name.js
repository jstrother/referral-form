import TextInput from '../inputs/TextInput';

function Name() {
  return (
    <div>
      <TextInput
        name="givenName"
        label="Given Name"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="preferredName"
        label="Preferred Name"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="familyName"
        label="Family Name"
        min="2"
        max="20"
        size="10"
      />
    </div>
  );
}

export default Name;