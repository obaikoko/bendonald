const subjectResults = ({ level }) => {
  let subjectResults;

  if (level === 'SSS 1' || level === 'SSS 2' || level === 'SSS 3') {
    return (subjectResults = [
      { subject: 'Mathematics' },
      { subject: 'English' },
      { subject: 'Agricultural Science' },
      { subject: 'Biology' },
      { subject: 'Chemistry' },
      { subject: 'Physics' },
      { subject: 'Further Mathematics' },
      { subject: 'Technical Drawing' },
      { subject: 'History' },
      { subject: 'Christian Religious Knowledge' },
      { subject: 'Civic Education' },
      { subject: 'Computer Science(ICT)' },
      { subject: 'Geography' },
      { subject: 'Economics' },
      { subject: 'Government' },
      { subject: 'Commerce' },
      { subject: 'Literature-In-English' },
    ]);
  } else if (level === 'JSS 1' || level === 'JSS 2' || level === 'JSS 3') {
    return (subjectResults = [
      { subject: 'Mathematics' },
      { subject: 'English' },
      { subject: 'Agricultural Science' },
      { subject: 'Basic Science' },
      { subject: 'Basic Technology' },
      { subject: 'Business Studies' },
      { subject: 'Christian Religious Knowledge' },
      { subject: 'Civic Education' },
      { subject: 'Computer Science(ICT)' },
      { subject: 'Creative Art' },
      { subject: 'French' },
      { subject: 'Home Economics' },
      { subject: 'Literature-In-English' },
      { subject: 'Social Studies' },
      { subject: 'Physical And Health Education' },
    ]);
  } else if (
    level === 'Grade 1' ||
    level === 'Grade 2' ||
    level === 'Grade 3' ||
    level === 'Grade 5' ||
    level === 'Grade 5'
  ) {
    return (subjectResults = [
      { subject: 'English' },
      { subject: 'Mathematics' },
      { subject: 'Social Studies & Citizenship' },
      { subject: 'Basic Science' },
      { subject: 'Physical And Health Education' },
      { subject: 'Christian Religious Knowledge' },
      { subject: 'Civic Education' },
      { subject: 'Quantitative Reasoning' },
      { subject: 'Verbal Reasoning' },
      { subject: 'Prevocational Studies' },
      { subject: 'Spelling Bee' },
    ]);
  } else {
    return (subjectResults = [
      { subject: 'Language Practices' },
      { subject: 'Independence' },
      { subject: 'Control Of Movement' },
      { subject: 'Object Identification' },
      { subject: 'Oral Number Work' },
      { subject: 'Scribbling' },
      { subject: 'Responsibility' },
      { subject: 'Sociability' },
      { subject: 'Nursery Rhymes/Poems' },
      { subject: 'Drawing And Colouring' },
      { subject: 'Singing' },
      { subject: 'Games' },
    ]);
  }
};
export default subjectResults;
