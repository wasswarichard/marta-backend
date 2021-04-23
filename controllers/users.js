const pool =  require("../config/database");
const _ = require("underscore");

const postUser = (body) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query('SELECT * FROM user', (error, result) => {
                if (error) {
                    return reject(error)
                }
                const existingUser = result.rows.filter(row => row.name === body.name);
                if(existingUser.length > 0) {
                    return resolve({
                        message: `User cannot be created, user ${body.name} already exists`,
                        code: 400
                    })
                }
                pool.query('INSERT INTO user (name, dob, smoke, language, nextDate)', [body.name, body.dob, body.smoke, body.language, body.nextDate], (error, results) => {
                    if(error) return  reject(error)
                    return resolve ({
                        username:  body.name,
                        message: `user ${body.name} has been created`,
                        code: 200
                    })
                })
            })

        } catch (error) {
            return  reject(error);
        }
    })
}

const updateUser = (user) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`UPDATE user SET status = ${user.body.status} WHERE id = ${user.body.id}`, (error, result) => {
                if(error) return  reject(error)
                return resolve({
                    message : `user ${user.body.name} has been updated`
                })
            });

        } catch (error) {
            return  reject(error)
        }
    })
}

const getUsers = () => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM public."user"`, (error, result) => {
                if (error) return  reject(error);
                return resolve(result.rows);
            })
        } catch (error) {
            return reject(error)
        }
    })
}
module.exports = {postUser, updateUser, getUsers}