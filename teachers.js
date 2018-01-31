"use strict";

const teachers = {
    connect: async function () {
        const mysql  = require("promise-mysql");
        const config = require("./config.json");
        const db     = await mysql.createConnection(config);
        return db;
    },
    larare: async function (rl) {
        const db = await teachers.connect();

        let sql;
        let res;

        sql = "SELECT *, TIMESTAMPDIFF(YEAR, fodd, CURRENT_TIMESTAMP()) as alder FROM larare";
        res = await db.query(sql);

        console.log(teachers.teacherAsTable(res));

        db.end();

        return;
    },
    teacherAsTable(res) {
        let str;

        str  = "+-----------+---------------------+-----------+----------+----------+\n";
        str += "| Akronym   | Namn                | Avdelning | Ålder    |   Lön    |\n";
        str += "|-----------|---------------------|-----------|----------|----------|\n";
        for (const row of res) {
            str += "| ";
            str += row.akronym.padEnd(10);
            str += "| ";
            str += (row.fornamn + " " + row.efternamn).padEnd(20);
            str += "| ";
            str += row.avdelning.padEnd(10);
            str += "| ";
            str += row.alder.toString().padStart(8);
            str += "| ";
            str += row.lon.toString().padStart(8);
            str += " |\n";
        }
        str += "+-----------+---------------------+-----------+----------+----------+\n";

        return str;
    }
};

module.exports = teachers;
