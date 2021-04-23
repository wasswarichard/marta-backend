const router = require('express').Router();
const getUsers =  require("../../controllers/users").getUsers;

router.get('/v1a/users', (req, res) => {
    getUsers()
        .then(users => {
            res.writeHead(200);
            return res.end(JSON.stringify(users))
        })
        .catch(error => {
            res.status(400).send(error)
        })

})

module.exports = router;