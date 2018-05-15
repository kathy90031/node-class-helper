"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./src/model/Student");
exports.hello = function (event, context, cb) {
    var student = new Student_1.Student("Katherine", "Youngblood", 45);
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: student.firstName + " " + student.lastName,
            input: event,
        }),
    };
    cb(null, response);
};
//# sourceMappingURL=handler.js.map