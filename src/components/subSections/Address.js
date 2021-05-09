import TextInput from '../inputs/TextInput';

function Address() {
  return (
    <div>
      <TextInput
        name="streetAddress1"
        label="Street Address 1"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="streetAddress2"
        label="Street Address 2"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="city"
        label="City"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="state"
        label="State"
        min="2"
        max="20"
        size="10"
      />
      <TextInput
        name="zipCode"
        label="Zip Code"
        min="5"
        max="5"
        size="5"
      />
    </div>
  );
}

export default Address;