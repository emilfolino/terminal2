

"use strict";

const teachers = {
    connect: async function () {
        const mysql  = require("promise-mysql");
        const config = require("./config.json");
        const db     = await mysql.createConnection(config);
        return db;
    },
    test: async function () {
        const db = await teachers.connect();

        let sql;
        let res;

        sql = "SELECT 1+1 AS Sum";
        res = await db.query(sql);

        console.info(res);

        db.end();
    }
};

module.exports = teachers;
