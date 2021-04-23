const pool =  require("../config/database");
const _ = require("underscore");

const postUser = (body) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`INSERT INTO public."users" (name, dob, smoke, language, nextavail, status) VALUES ($1, $2, $3, $4, $5, $6)`, [body.name, body.dob, body.smoke, body.language, body.nextavail, body.status], (error, results) => {
                if(error) return  reject(error)
                return resolve ({
                    username:  body.name,
                    message: `user ${body.name} has been created`,
                })
            })

        } catch (error) {
            return  reject(error);
        }
    })
}

const updateUserStatus = (user) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`UPDATE public.users SET status = $1 WHERE id = $2`, [user.status, user.id], (error, result) => {
                if(error) return  reject(error)
                return resolve({
                    message : `user ${user.name} has been updated`,
                    data : {...user}
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
            pool.query(`SELECT * FROM public."users"`, (error, result) => {
                if (error) return  reject(error);
                return resolve(result.rows);
            })
        } catch (error) {
            return reject(error)
        }
    })
}
module.exports = {postUser, updateUserStatus, getUsers}