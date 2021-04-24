const pool = require('./pool');

pool.on('connect', ()=> {
    console.log('connected to the database')
})

const createDataTable = () => {
    const dataCreateQuery = `CREATE TABLE IF NOT EXISTS users
    (
        id serial primary key,
        name character varying(100),
        dob character varying(100),
        smoke character varying(100),
        language character varying(100),
        nextavail character varying(100),
        status character varying(100)
    )
    `;
    pool.query(dataCreateQuery)
        .then(res => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
        })
};

const createAllTables = () => {
    createDataTable();
}

process.argv.includes('--create-data-tables') && createAllTables();

exports.createAllTables = createAllTables;