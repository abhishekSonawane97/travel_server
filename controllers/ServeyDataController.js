const Survey = require("../database/survey");

const getServeyData = async (req, res) => {
  try {
    let surveyData = await Survey.find();
    if (!surveyData) {
      res.status(400);
      throw new Error("Try again, network unreachable");
    }
    res.status(200).json(surveyData);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const postServeyData = async (req, res) => {
  try {
    const {
      category,
      subcategory1,
      subcategory2,
      subcategory3,
      subcategory4,
      question,
    } = req.body;
    if (!category || !subcategory1 || !question) {
      res.status(400);
      throw new Error("category, question, and subcategory1 cant be empty");
    }
    let surveyData = await Survey.findOne({ question });
    if (surveyData) {
      res.status(400);
      throw new Error("Question is already exists, try diffent question");
    }
    surveyData = await Survey.create({
      category,
      subcategory1,
      subcategory2,
      subcategory3,
      subcategory4,
      question,
    });
    res.status(200).json(surveyData);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getServeyData, postServeyData };
