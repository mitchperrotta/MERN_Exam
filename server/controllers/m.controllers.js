const Exam = require("../models/m.model");

//get all
module.exports.findAll = (req, res) => {
    Exam.find()
        .then(allExam => res.json({Exams: allExam}))
        .catch(err => res.json({message: "Something went wrong getting all", error: err}))
}

//get one
module.exports.findOneExam = (req, res) => {
    Exam.findOne({_id: req.params._id})
        .then(oneExam => res.json({Exam: oneExam}))
        .catch(err => res.json({message: "something went wrong getting one", error: err}))
}