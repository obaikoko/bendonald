import asyncHandler from 'express-async-handler';
import Result from '../model/result.js';
import Student from '../model/student.js';
import getGrade from '../utils/getGrade.js';
import getOrdinalSuffix from '../utils/getOrdinalSuffix.js';
import subjectResults from '../utils/subjectResults.js';

// @ GENERATE RESULT
// @route POST api/results
// @privacy Private
const createResult = asyncHandler(async (req, res) => {
  const { session, term, level } = req.body;
  const id = req.params.id;
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }

  if (!session || !term || !level) {
    res.status(400);
    throw new Error('Add all fields');
  }

  const student = await Student.findById(id);
  if (!student) {
    res.status(400);
    throw new Error('Student does not exist');
  }

  const resultExist = await Result.findOne({
    studentId: id,
    session,
    term,
    level,
  });
  if (resultExist) {
    res.status(400);
    throw new Error('Result already generated!');
  }
  const addSubjects = subjectResults({ level });

  if (level === 'Lower Reception' || level === 'Upper Reception') {
    const result = await Result.create({
      user: req.user._id,
      studentId: id,
      level,
      subLevel: student.subLevel,
      firstName: student.firstName,
      lastName: student.lastName,
      otherName: student.otherName,
      image: student.image.url,
      session,
      term,
      subjectResults: addSubjects,
      teacherRemark: '',
      principalRemark: '',
    });

    if (result) {
      res.status(200).json(result);
    }
  } else {
    const result = await Result.create({
      user: req.user._id,
      studentId: id,
      level,
      subLevel: student.subLevel,
      firstName: student.firstName,
      lastName: student.lastName,
      otherName: student.otherName,
      image: student.image.url,
      session,
      term,
      position: '',
      totalScore: '',
      averageScore: '',
      subjectResults: addSubjects,
      affectiveAssessment: [
        { aCategory: 'Attendance' },
        { aCategory: 'Carefulness' },
        { aCategory: 'Responsibility' },
        { aCategory: 'Honesty' },
        { aCategory: 'Neatness' },
        { aCategory: 'Obedience' },
        { aCategory: 'Politeness' },
        { aCategory: 'Punctuality' },
      ],
      psychomotor: [
        { pCategory: 'Handwriting' },
        { pCategory: 'Drawing' },
        { pCategory: 'Sport' },
        { pCategory: 'Speaking' },
        { pCategory: 'Music' },
        { pCategory: 'Craft' },
        { pCategory: 'ComputerPractice' },
      ],
      teacherRemark: '',
      principalRemark: '',
    });

    if (result) {
      res.status(200).json(result);
    }
  }
});
// @GET ALL RESULT
// @route GET api/results
// @privacy Private
const getResults = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }

  const level = req.query.level;
  const keyword = req.query.keyword
    ? {
        $or: [
          { firstName: { $regex: req.query.keyword, $options: 'i' } },
          { lastName: { $regex: req.query.keyword, $options: 'i' } },
          { otherName: { $regex: req.query.keyword, $options: 'i' } },
        ],
      }
    : {};

  // Create base query, filtered by keyword and level if specified
  let query =
    level && level !== 'All'
      ? { ...keyword, level: { $regex: level, $options: 'i' } }
      : keyword;

  // Restrict query to the logged-in user's results unless they are an admin
  if (!req.user.isAdmin) {
    query = { ...query, level: req.user.level, subLevel: req.user.subLevel };
  }

  const pageSize = 30;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Result.countDocuments(query);
  const result = await Result.find(query)
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (result) {
    res.status(200);
    res.json({ result, page, totalPages: Math.ceil(count / pageSize) });
  } else {
    res.status(404);
    throw new Error('Result does not exist');
  }
});
// @GET STUDENT RESULT
// @route GET api/results/:id
// @privacy Private
const getResult = asyncHandler(async (req, res) => {
  const result = await Result.findById(req.params.id);
  
  if (!result) {
    res.status(404);
    throw new Error('Result does not exist');
  }

  // If a student is making the request
  if (req.student) {
    const isOwner = req.student._id.toString() === result.studentId.toString();

    if (!isOwner) {
      res.status(401);
      throw new Error('Unauthorized Access!');
    }

    // if (!result.isPaid) {
    //   res.status(401);
    //   throw new Error('Unable to access result, Please contact the admin');
    // }
  }

  // If a teacher (user) is making the request, allow access regardless of isPaid
  // No additional checks needed unless you want to restrict teachers to only certain results

  res.status(200).json(result);
});


// @UPDATE STUDENT RESULT
// @route PUT api/results/id
// @privacy Private
const updateResult = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }

  const {
    subject,
    test,
    exam,
    grade,
    affectiveAssessments, // For affective assessments if needed
    psychomotorAssessments, // Expect an array of objects [{ pCategory, grade }]
    teacherRemark,
    principalRemark,
  } = req.body;

  const testScore = Number(test);
  const examScore = Number(exam);

  try {
    const result = await Result.findById(req.params.id);
    if (
      result.level !== req.user.level ||
      result.subLevel !== req.user.subLevel
    ) {
      res.status(401);
      throw new Error(
        'Unable to update this result, Please contact the class teacher'
      );
    }

    if (!result) {
      res.status(404);
      throw new Error('Result not found');
    }

    if (subject) {
      const subjectResult = result.subjectResults.find(
        (sub) => sub.subject === subject
      );
      if (!subjectResult) {
        res.status(404);
        throw new Error('Subject not found in results');
      }
      if (
        result.level === 'Lower Reception' ||
        result.level === 'Upper Reception'
      ) {
        const newGrade = (subjectResult.grade = grade || subjectResult.grade);
      } else {
        const newTestScore = (subjectResult.testScore =
          testScore || subjectResult.testScore);
        const newExamScore = (subjectResult.examScore =
          examScore || subjectResult.examScore);
        subjectResult.totalScore = newTestScore + newExamScore;
        subjectResult.grade = getGrade(subjectResult.totalScore);
      }

      // Calculate the new total score and average if required
      const totalScore = result.subjectResults.reduce(
        (acc, sub) => acc + sub.totalScore,
        0
      );
      const averageScore = totalScore / result.subjectResults.length;

      result.totalScore = totalScore;
      result.averageScore = averageScore;
    }
    if (affectiveAssessments && affectiveAssessments.length > 0) {
      affectiveAssessments.forEach((assessment) => {
        const affectiveAssessment = result.affectiveAssessment.find(
          (sub) => sub.aCategory === assessment.aCategory
        );

        if (!affectiveAssessment) {
          res.status(404);
          throw new Error(
            `Category ${assessment.aCategory} not found in Psychomotor`
          );
        }

        affectiveAssessment.grade = assessment.grade;
      });
    }
    if (psychomotorAssessments && psychomotorAssessments.length > 0) {
      psychomotorAssessments.forEach((assessment) => {
        const psychomotor = result.psychomotor.find(
          (sub) => sub.pCategory === assessment.pCategory
        );

        if (!psychomotor) {
          res.status(404);
          throw new Error(
            `Category ${assessment.pCategory} not found in Psychomotor`
          );
        }

        psychomotor.grade = assessment.grade;
      });
    }

    result.teacherRemark = teacherRemark || result.teacherRemark;
    result.principalRemark = principalRemark || result.principalRemark;

    await result.save();

    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// @desc removes subjects from all existing results for selected class, term and session
const manualSubjectRemoval = asyncHandler(async (req, res) => {
  const { session, term, level, subjectName } = req.body;

  if (!session || !term || !level || !subjectName) {
    res.status(400);
    throw new Error(
      'Please add all field (session, term, level and subjectName)'
    );
  }

  const results = await Result.find({ session, term, level });

  if (!results || results.length === 0) {
    res.status(404);
    throw new Error('No result found');
  }

  for (const result of results) {
    result.subjectResults = result.subjectResults.filter(
      (sub) => sub.subject !== subjectName
    );

    // Calculate the new total score and average if required
    const totalScore = result.subjectResults.reduce(
      (acc, sub) => acc + sub.totalScore,
      0
    );

    const averageScore =
      result.subjectResults.length > 0
        ? totalScore / result.subjectResults.length
        : 0;

    result.totalScore = totalScore;
    result.averageScore = averageScore;

    await result.save();
  }

  // Send one response after the loop
  res
    .status(200)
    .json(
      `${subjectName} removed successfully from ${results.length} result(s)`
    );
});

// @desc add subject to all selected results
const addSubjectToResults = asyncHandler(async (req, res) => {
  const { session, term, level, subjectName } = req.body;
  if (!session || !term || !level || !subjectName) {
    res.status(400);
    throw new Error(
      'Please add all field (session, term, level and subjectName)'
    );
  }

  // Define a new subject template
  const newSubject = {
    subject: subjectName,
    test1: 0,
    test2: 0,
    testScore: 0,
    examScore: 0,
    totalScore: 0,
    grade: '-',
  };

  // Fetch relevant student results
  const results = await Result.find({
    session,
    term,
    level,
  });

  for (const result of results) {
    const alreadyExists = result.subjectResults.some(
      (sub) => sub.subject.toLowerCase() === subjectName.toLowerCase()
    );

    if (!alreadyExists) {
      result.subjectResults.push(newSubject);
      // Calculate the new total score and average if required
      const totalScore = result.subjectResults.reduce(
        (acc, sub) => acc + sub.totalScore,
        0
      );

      const averageScore =
        result.subjectResults.length > 0
          ? totalScore / result.subjectResults.length
          : 0;

      result.totalScore = totalScore;
      result.averageScore = averageScore;
    }
    // Calculate the new total score and average if required
    const totalScore = result.subjectResults.reduce(
      (acc, sub) => acc + sub.totalScore,
      0
    );

    const averageScore =
      result.subjectResults.length > 0
        ? totalScore / result.subjectResults.length
        : 0;

    result.totalScore = totalScore;
    result.averageScore = averageScore;
    await result.save();
  }

  res.json({
    message: `${subjectName} added to all ${level} student results for ${term} term.`,
  });
});

// @desc deletes a students selected result
const deleteResult = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }
  const result = await Result.findById(req.params.id);
  if (result) {
    await result.deleteOne({ _id: result._id });
    res.status(200);
    res.json('Result deleted successfully');
  } else {
    res.status(404);
    throw new Error('Result not found!');
  }
});

// @desc updates result to paid and makes it visible to student
// @privacy private

const updateResultPayment = asyncHandler(async (req, res) => {
  const { resultId, resultFee } = req.body;

  if (!resultId) {
    res.status(400);
    throw new Error('Bad request! no resultId');
  }
  const result = await Result.findById(resultId);
  if (!result) {
    res.status(404);
    throw new Error('Result not found!');
  }
  if (resultFee && resultFee === 'paid') {
    result.isPaid = true;
  } else if (resultFee && resultFee === 'notPaid') {
    result.isPaid = false;
  }
  await result.save();

  res.status(200);
  res.json('Payment status updated successfully');
});

const generatePositions = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }
  const { level, subLevel, session, term } = req.body;

  try {
    // Fetch all results for the specified class and session
    const results = await Result.find({ level, session, term, subLevel });

    if (!results || results.length === 0) {
      res.status(404);
      throw new Error(
        `No results found for  ${level}${subLevel} ${session} session`
      );
    }

    // Sort results by average score in descending order
    results.sort((a, b) => b.averageScore - a.averageScore);

    // Assign positions based on sorted order
    results.forEach((result, index) => {
      result.position = `${index + 1}${getOrdinalSuffix(index + 1)}`;
      result.numberInClass = results.length;
    });

    // Save updated results
    await Promise.all(results.map((result) => result.save()));

    res
      .status(200)
      .json(`${level}${subLevel} ${session} Results Published Successfully`);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

const generateBroadsheet = asyncHandler(async (req, res) => {
  const { session, term, level, subLevel } = req.body;

  // Fetch results by level and subLevel
  const results = await Result.find({ session, term, level, subLevel });

  // Map over the results to extract relevant fields (subject, testScore, examScore)
  const transformedResults = results.map((result) => ({
    studentId: result.studentId,
    firstName: result.firstName,
    lastName: result.lastName,
    subjectResults: result.subjectResults.map((subject) => ({
      subject: subject.subject,
      testScore: subject.testScore,
      examScore: subject.examScore,
    })),
  }));

  // Return the transformed data
  res.json(transformedResults);
});

export {
  createResult,
  getResults,
  getResult,
  updateResult,
  updateResultPayment,
  addSubjectToResults,
  manualSubjectRemoval,
  deleteResult,
  generatePositions,
  generateBroadsheet,
};
