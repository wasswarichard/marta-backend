const router = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const getUsers =  require("../../controllers/users").getUsers;
const postUser = require("../../controllers/users").postUser;
const updateUserStatus = require("../../controllers/users").updateUserStatus;

router.get('/v1a/users', (req, res) => {


    // postUser({
    //     name : "Wasswa",
    //     dob: new Date(),
    //     smoke: "smoker",
    //     language: "C2",
    //     nextavail: new Date(),
    //     status: "SELECTION"
    // }).then(users => {
    //     console.log(users)
    // })
    // .catch(error => {
    //     console.log(error)
    // })
    getUsers()
            .then(users => {
                res.writeHead(200);
                return res.end(JSON.stringify(users))
            })
            .catch(error => {
                res.status(400).send(error)
            })

})

router.put('/v1a/user/update', jsonParser, (req, res) => {
    updateUserStatus({...req.body})
        .then(user => {
            res.writeHead(200);
            return res.end(JSON.stringify(user))
        })
        .catch(error => res.status(400).send(error))
})

module.exports = router;