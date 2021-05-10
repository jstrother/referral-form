import React from 'react';
import { useDispatch } from 'react-redux';
import { setGuardianInfo } from '../../features/guardianSlice';
import RadioButtons from '../inputs/RadioButtons';

export default function FirstSection() {
  const dispatch = useDispatch();

  return (
    <div className="section">
      First Section
      <RadioButtons
        name="services"
        question="Has this person received services from us before?"
      />
      <RadioButtons
        name="adult"
        question="Is this person at least 18 years old?"
      />
      <RadioButtons
        name="guardian"
        question="Does this person have a guardian?"
      />
    </div>
  );
}
