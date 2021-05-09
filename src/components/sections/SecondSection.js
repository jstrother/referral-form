import PersonalInfo from '../subSections/PersonalInfo';
import EmergencyContact from '../subSections/EmergencyContact';
import GuardianInfo from '../subSections/GuardianInfo';
import DemographicInfo from '../subSections/DemographicInfo';

function SecondSection() {
  return (
    <div className="section">
      Second Section
      <PersonalInfo />
      <EmergencyContact />
      <GuardianInfo />
      <DemographicInfo />
    </div>
  );
}

export default SecondSection;