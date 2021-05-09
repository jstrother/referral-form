import RadioButtons from '../inputs/RadioButtons';

function FirstSection() {
  return (
    <div className="section">
      First Section
      <RadioButtons
        name="services"
        question="1. Has this person received services from us before?"
      />
      <RadioButtons
        name="adult"
        question="2. Is this person at least 18 years old?"
      />
    </div>
  );
}

export default FirstSection;