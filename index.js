const teachers = require("./teachers.js");


/**
 * Main function.
 * @returns void
 */
(function() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt("skolan: ");
    rl.prompt();

    rl.on("close", exitProgram);
    rl.on("line", (line) => {
        line = line.trim();
        switch (line) {
            case "quit":
            case "exit":
                exitProgram();
                break;
            case "help":
            case "menu":
                showMenu();
                rl.prompt();
                break;
            case "larare":
                teachers.larare(rl);
                break;
            case "larare":
                teachers.larare(rl);
                break;
            default:
                console.log("No option called that");
                showMenu();
                rl.prompt();
                break;
        }

    });
})();



/**
 * Close down program and exit with a status code.
 *
 * @param {number} code Exit with this value, defaults to 0.
 *
 * @returns {void}
 */
function exitProgram(code) {
    code = code || 0;

    console.info("Exiting");
    process.exit(code);
}



/**
 * Show the menu on that can be done.
 *
 * @returns {void}
 */
function showMenu() {
    console.info(
        ` You can choose from the following commands.\n`
        + `  exit, quit, ctrl-d - to exit the program.\n`
        + `  help, menu - to show this menu.\n`
        + `  cheat      - show the current number.\n`
        + `  init       - randomize a new number.\n`
        + `  anything else is treated as a guess.`
    );
}
