import asyncHandler from 'express-async-handler';
import Student from '../model/student.js';
import Staff from '../model/staff.js';
import Event from '../model/events.js';
import Result from '../model/result.js';
import Admission from '../model/admission.js';

// @desc Get  staff data
// @route Get api/students/data
// @privacy Private ADMIN
const studentsData = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }

  const allStudent = await Student.find();

  const paidFees = allStudent.filter(
    (student) => student.isPaid === true
  ).length;

  // Get all female students
  const femaleStudents = allStudent.filter(
    (student) => student.gender === 'Female'
  );

  // Get all male students
  const maleStudents = allStudent.filter(
    (student) => student.gender === 'Male'
  );

  // Creche male Students
  const crecheMales = allStudent.filter(
    (student) => student.level === 'Creche' && student.gender === 'Male'
  );
  // Creche Females Students
  const crecheFemales = allStudent.filter(
    (student) => student.level === 'Creche' && student.gender === 'Female'
  );
  // Lower Reception male Students
  const lowerReceptionMale = allStudent.filter(
    (student) => student.level === 'Lower Reception' && student.gender === 'Male'
  );
  // Lower Recption Female Students
  const lowerReceptionFemale = allStudent.filter(
    (student) =>
      student.level === 'Lower Reception' && student.gender === 'Female'
  );
  //  Upper Reception Male Students
  const upperReceptionMale = allStudent.filter(
    (student) =>
      student.level === 'Upper Reception' && student.gender === 'Male'
  );
  //  Upper Reception Female Students
  const upperReceptionFemale = allStudent.filter(
    (student) =>
      student.level === 'Upper Reception' && student.gender === 'Female'
  );
  // Nursery 1 Male Students
  const nursery1Male = allStudent.filter(
    (student) => student.level === 'Nursery 1' && student.gender === 'Male'
  );
  // Nursery 1 Female Students
  const nursery1Female = allStudent.filter(
    (student) => student.level === 'Nursery 1' && student.gender === 'Female'
  );
  // Nursery 2 Male Students
  const nursery2Male = allStudent.filter(
    (student) => student.level === 'Nursery 2' && student.gender === 'Male'
  );
  // Nursery 2 Female Students
  const nursery2Female = allStudent.filter(
    (student) => student.level === 'Nursery 2' && student.gender === 'Female'
  );

  // Grade 1 Male Students
  const grade1MaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 1' && student.gender === 'Male'
  );

  // Grade 1 Female Students
  const grade1FemaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 1' && student.gender === 'Female'
  );

  // Grade 2 Male Students
  const grade2MaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 2' && student.gender === 'Male'
  );

  // Grade 2 Female Students
  const grade2FemaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 2' && student.gender === 'Female'
  );

  // Grade 3 Male Students
  const grade3MaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 3' && student.gender === 'Male'
  );

  // Grade 3 Female Students
  const grade3FemaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 3' && student.gender === 'Female'
  );

  // Grade 4 Male Students
  const grade4MaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 4' && student.gender === 'Male'
  );

  // Grade 4 Female Students
  const grade4FemaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 4' && student.gender === 'Female'
  );

  // Grade 5 Male Students
  const grade5MaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 5' && student.gender === 'Male'
  );

  // Grade 5 Female Students
  const grade5FemaleStudents = allStudent.filter(
    (student) => student.level === 'Grade 5' && student.gender === 'Female'
  );

  // JSS 1 male students
  const jss1MaleStudents = allStudent.filter(
    (student) => student.level === 'JSS 1' && student.gender === 'Male'
  );

  // JSS 1 female students
  const jss1FemaleStudents = allStudent.filter(
    (student) => student.level === 'JSS 1' && student.gender === 'Female'
  );

  // JSS 2 male students
  const jss2MaleStudents = allStudent.filter(
    (student) => student.level === 'JSS 2' && student.gender === 'Male'
  );

  // JSS 2 female students
  const jss2FemaleStudents = allStudent.filter(
    (student) => student.level === 'JSS 2' && student.gender === 'Female'
  );

  // JSS 3 male students
  const jss3MaleStudents = allStudent.filter(
    (student) => student.level === 'JSS 3' && student.gender === 'Male'
  );

  // JSS 3 female students
  const jss3FemaleStudents = allStudent.filter(
    (student) => student.level === 'JSS 3' && student.gender === 'Female'
  );

  // SSS 1 male students
  const sss1MaleStudents = allStudent.filter(
    (student) => student.level === 'SSS 1' && student.gender === 'Male'
  );

  // SSS 1 female students
  const sss1FemaleStudents = allStudent.filter(
    (student) => student.level === 'SSS 1' && student.gender === 'Female'
  );

  // SSS 2 male students
  const sss2MaleStudents = allStudent.filter(
    (student) => student.level === 'SSS 2' && student.gender === 'Male'
  );

  // SSS 2 female students
  const sss2FemaleStudents = allStudent.filter(
    (student) => student.level === 'SSS 2' && student.gender === 'Female'
  );

  // SSS 3 male students
  const sss3MaleStudents = allStudent.filter(
    (student) => student.level === 'SSS 3' && student.gender === 'Male'
  );

  // SSS 3 female students
  const sss3FemaleStudents = allStudent.filter(
    (student) => student.level === 'SSS 3' && student.gender === 'Female'
  );

  // Respond with the count of each group
  res.json({
    females: femaleStudents.length,
    males: maleStudents.length,
    crecheMales: crecheMales.length,
    crecheFemales: crecheFemales.length,
    lowerReceptionMales: lowerReceptionMale.length,
    lowerReceptionFemales: lowerReceptionFemale.length,
    upperReceptionMales: upperReceptionMale.length,
    upperReceptionFemales: upperReceptionFemale.length,
    nursery1Males: nursery1Male.length,
    nursery1Females: nursery1Female.length,
    nursery2Males: nursery2Male.length,
    nursery2Females: nursery2Female.length,
    grade1Males: grade1MaleStudents.length,
    grade1Females: grade1FemaleStudents.length,
    grade2Males: grade2MaleStudents.length,
    grade2Females: grade2FemaleStudents.length,
    grade3Males: grade3MaleStudents.length,
    grade3Females: grade3FemaleStudents.length,
    grade4Males: grade4MaleStudents.length,
    grade4Females: grade4FemaleStudents.length,
    grade5Males: grade5MaleStudents.length,
    grade5Females: grade5FemaleStudents.length,
    grade1Females: grade1FemaleStudents.length,
    jss1Males: jss1MaleStudents.length,
    jss1Females: jss1FemaleStudents.length,
    jss2Males: jss2MaleStudents.length,
    jss2Females: jss2FemaleStudents.length,
    jss3Males: jss3MaleStudents.length,
    jss3Females: jss3FemaleStudents.length,
    sss1Males: sss1MaleStudents.length,
    sss1Females: sss1FemaleStudents.length,
    sss2Males: sss2MaleStudents.length,
    sss2Females: sss2FemaleStudents.length,
    sss3Males: sss3MaleStudents.length,
    sss3Females: sss3FemaleStudents.length,
    totalStudents: allStudent.length,
    paidFees,
  });
});

const staffData = asyncHandler(async (req, res) => {
  const staff = await Staff.find({});
  const totalStaff = staff.length;
  const tutorialStaff = staff.filter((x) => x.category === 'Tutorial').length;
  const nonTutorialStaff = staff.filter(
    (x) => x.category === 'Non Tutorial'
  ).length;

  res.status(200);
  res.json({ totalStaff, tutorialStaff, nonTutorialStaff });
});

// const schoolFees = asyncHandler(async (req, res) => {
//   const paidFees = await Student.find({ isPaid: true });
// });

export { studentsData, staffData };
