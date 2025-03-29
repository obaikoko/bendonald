import asyncHandler from 'express-async-handler';
import NextTerm from '../model/nextTermInfo.js';

const addNextTermInfo = asyncHandler(async (req, res) => {
  const {
    reOpeningDate,
    session,
    level,
    term,
    nextTermFee,
    busFee,
    otherCharges,
  } = req.body;

  if (!reOpeningDate || !level || !nextTermFee || !term) {
    res.status(400);
    throw new Error('Please add all field');
  }

  const nextTerm = await NextTerm.findOne({ session, level, term });

  if (nextTerm) {
    nextTerm.reOpeningDate = reOpeningDate || nextTerm.reOpeningDate;
    nextTerm.session = session || nextTerm.session;
    nextTerm.term = term || nextTerm.term;
    nextTerm.level = level || nextTerm.level;
    nextTerm.nextTermFee = nextTermFee || nextTerm.level;
    nextTerm.busFee = busFee || nextTerm.busFee;
    nextTerm.otherCharges = otherCharges || nextTerm.otherCharges;
    await nextTerm.save();
    res.status(200);
    res.json(`Next term resumption details updated successfully for ${level}`);
  } else {
    try {
      const createNextTerm = await NextTerm.create({
        reOpeningDate,
        session,
        level,
        term,
        nextTermFee,
        busFee,
        otherCharges,
      });
      res.status(201);
      res.json(
        `${session} ${term} term resumption information has been updated sucessfully for all ${level}`
      );
    } catch (error) {
      res.status(500);
      throw new Error('Somthing went wrong');
    }
  }
});

const getNextTermInfo = asyncHandler(async (req, res) => {
  const { level, session, term } = req.query;

  const nextTermInfo = await NextTerm.findOne({ level, session, term });

  if (!nextTermInfo) {
    res.status(404);
    throw new Error('Not found!');
  }

  res.status(200);
  res.json(nextTermInfo);
});

export { addNextTermInfo, getNextTermInfo };
