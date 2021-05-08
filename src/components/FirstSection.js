import RadioButtons from './RadioButtons.js';

function FirstSection() {
  return (
    <div className="Section">
      First Section
      <p>
        1. Has this person received services from us before?
        <RadioButtons name="services" />
      </p>
      <p>
        2. Is this person at least 18 years old?
        <RadioButtons name="adult" />
      </p>
    </div>
  );
}

export default FirstSection;