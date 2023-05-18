const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const AnswerDB = require('../models/Answers')

router.post('/', async (req, res) => {
    const answerData = new AnswerDB({
        question_id: req.body.question_id,
        answer: req.body.answer,
        user: req.body.user,
    })
    await answerData.save().then((doc) => {
        res.status(201).send({
            status: true,
            data: doc
        });
    }).catch((err) => {
        res.status(400).send({
            status: false,
            message: "Error Adding Answers"
        });
    });
});


// router.get('/', async (req, res) => {
//     QuestionDB.aggregate([{
//         $lookup: {
//             from: "Comments",
//             let: { question_id: "$_id" },
//             pipeline: [
//                 {
//                     $match: {
//                         $expr: {
//                             $eq: ["$question_id", "$$question_id"],
//                         },
//                     }
//                 },
//                 {
//                     $project: {
//                         _id: 1,
//                         comment: 1,
//                         created_at: 1
//                     },
//                 }
//             ],
//             as: "comments",
//         },
//     },
//     {
//         $lookup: {
//             from: "answers",
//             let: { question_id: "$_id" },
//             pipeline: [
//                 {
//                     $match: {
//                         $expr: {
//                             $eq: ["$question_id", "$$question_id"],
//                         },
//                     }
//                 },
//                 {
//                     $project: {
//                         _id: 1,
//                         // comment:1,
//                         // created_at:1
//                     },
//                 }
//             ],
//             as: "answersDetails",
//         },
//     },
//     {
//         $project: {
//             __v: 0,
//         },
//     },

//     ])
//         .exec()
//         .then((questionDetails) => {
//             res.status(200).send(questionDetails);
//         })
//         .catch((e) => {
//             console.log("Error : ", e);
//             res.status(400).send(error);
//         });
// });



// router.get("/:id",async(req,res)=>{

// })
module.exports = router;
