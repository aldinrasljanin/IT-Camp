const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { validationResult } = require('express-validator')

// Login
exports.login = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty() && !req.body.isGuest) {
        const error = new Error('Validation failed.')
        error.data = errors.array()
        return res.status(422).json({ message: error.data[0].msg })
    }
    let { email, password } = req.body
    if (req.body.isGuest) {
        email = process.env.GUEST_EMAIL
        password = process.env.GUEST_PASSWORD
    }
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(422).json({
                message: 'Neispravan email ili šifra',
            })
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(422).json({
                    message: 'Neispravan email ili šifra',
                })
            }
            if (result) {
                const token = jwt.sign(
                    {
                        email: user.email,
                        id: user._id.toString(),
                        fullName: user.fullName,
                        isAdmin: user.isAdmin,
                        isGuest: user.isGuest,
                    },
                    process.env.JWT_KEY,
                    { expiresIn: '365d' }
                )
                return res.status(200).json({
                    success: 'Prijava uspješna!',
                    token: token,
                    userId: user._id.toString(),
                })
            } else {
                return res.status(422).json({
                    message: 'Neispravan email ili šifra',
                })
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// Signup
exports.signup = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.statusCode = 422
        error.data = errors.array()
        return res.status(422).json({ error: error.data[0].msg })
    }
    const { email, fullName, password } = req.body
    let isAdmin = false
    let isGuest = false
    if (req.body.isAdmin === `${process.env.ADMIN_KEY}`) {
        isAdmin = true
    }
    if (req.body.isGuest) {
        isGuest = true
    }
    try {
        const hashedPw = await bcrypt.hash(password, 12)
        const user = new User({
            _id: mongoose.Types.ObjectId(),
            email,
            password: hashedPw,
            fullName,
            isAdmin,
            isGuest,
        })
        const result = await user.save()
        res.status(201).json({
            message: 'Registracija uspješna!',
            userId: result._id,
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get All Users
// exports.allUsers = (req, res, next) => {
//   const condition = req.query;
//   User.find()
//     .sort(condition)
//     .then((result) => {
//       const users = result.map((user) => {
//         return { userId: user._id, fullName: user.fullName };
//       });
//       res.json(users);
//     });
// };

// exports.getWinners = (req, res, next) => {
//   User.find({ isWinner: true })
//     .sort({ fullName: 1 })
//     .then((result) => {
//       const users = result.map((user) => {
//         return { userId: user._id, fullName: user.fullName };
//       });
//       res.json(users);
//     });
// };

// Edit user
exports.editUser = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.data = errors.array()
        return res.json({ error: error.data[0].msg })
    }

    const { password } = req.body
    const { userId } = req.params

    try {
        const hashedPw = await bcrypt.hash(password, 12)
        const user = await User.findOne({ _id: userId })
        user.password = hashedPw
        await user.save()
        res.json({ message: 'Šifra uspešno promijenjena.' })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    const userId = req.params.userId
    try {
        const result = await User.deleteOne({ _id: userId })
        res.json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get user's info
// exports.getUserInfo = (req, res, next) => {
//   const userId = req.params.userId;
//   User.findById(userId).then((user) => {
//     const userData = {
//       email: user.email,
//       fullName: user.fullName,
//       isWinner: user.isWinner,
//     };
//     Quiz.find({ takenBy: userId })
//       .sort({ updatedAt: -1 })
//       .populate({
//         path: "questions.question",
//         model: "Question",
//       })
//       .then((result) => {
//         const quiz = result.map((obj) => {
//           const a = new Date(obj.updatedAt);
//           const months = [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec",
//           ];
//           const year = a.getFullYear();
//           const month = months[a.getMonth()];
//           const date = a.getDate();
//           let hour = a.getHours();
//           if (hour.toString().length == 1) {
//             hour = "0" + hour;
//           }
//           let min = a.getMinutes();
//           if (min.toString().length == 1) {
//             min = "0" + min;
//           }
//           let sec = a.getSeconds();
//           if (sec.toString().length == 1) {
//             sec = "0" + sec;
//           }
//           const time =
//             date +
//             " " +
//             month +
//             " " +
//             year +
//             " " +
//             hour +
//             ":" +
//             min +
//             ":" +
//             sec;
//           let selectedQuestion = {};
//           let incorrect = false;
//           let wrongAnswer = obj.questions.find(
//             (q) => q.isAnswered && !q.isAnsweredCorrectly && q.question
//           );
//           if (wrongAnswer) {
//             Object.assign(selectedQuestion, {
//               questionText: wrongAnswer.question.text,
//               questionLink: wrongAnswer.question.link,
//             });
//             incorrect = true;
//           }
//           let timeIsUp;
//           if (
//             (obj.createdAt - new Date(Date.now() - 10 * 60 * 1000)) / 1000 >
//               0 &&
//             obj.active
//           ) {
//             timeIsUp = false;
//             Object.assign(selectedQuestion, {
//               questionText:
//                 "Ovaj kviz nije završen. Možete ga nastaviti pritiskom na dugme ispod.",
//               questionLink: obj._id,
//             });
//           } else if (
//             (obj.createdAt - new Date(Date.now() - 10 * 60 * 1000)) / 1000 <=
//               0 &&
//             !incorrect
//           ) {
//             timeIsUp = true;
//             Object.assign(selectedQuestion, {
//               questionText:
//                 "Niste završili kviz. Predviđeno vrijeme za igranje kviza je isteklo.",
//               questionLink: "Time is up.",
//             });
//           } else {
//             timeIsUp = true;
//           }

//           Object.assign(selectedQuestion, {
//             time: time,
//             score: obj.score,
//             incorrect: incorrect,
//             timeIsUp: timeIsUp,
//           });

//           return selectedQuestion;
//         });

//         res.json({
//           user: userData,
//           quiz: quiz,
//           numOfGames: result.length,
//         });
//       });
//   });
// };

exports.setWinner = async (req, res, next) => {
    const userId = req.params.userId
    try {
        const user = await User.findById(userId)
        user.isWinner = !user.isWinner
        const result = await user.save()
        res.json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
