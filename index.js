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

    const teachers = require("./teachers.js");

    rl.setPrompt("skolan: ");
    rl.prompt();

    rl.on("close", exitProgram);
    rl.on("line", async (line) => {
        line = line.trim();
        switch (line) {
            case "quit":
            case "exit":
                exitProgram();
                break;
            case "help":
            case "menu":
                showMenu();
                break;
            case "larare":
                await teachers.larare(rl);
                break;
            default:
                console.log("No option called that");
                showMenu();
                break;
        }
        rl.prompt();
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
        + `  larare     - Show larare table.\n`
        + `  init       - randomize a new number.\n`
        + `  anything else is treated as a guess.`
    );
}
