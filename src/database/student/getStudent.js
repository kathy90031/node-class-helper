'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
var dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.get = function (event, context, cb) {
    var params = {
        TableName: process.env.DYNAMODB_TABLE_STUDENT,
        Key: {
            id: event.pathParameters.id,
        },
    };
    // fetch pet from the database
    dynamoDb.get(params, function (error, result) {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t fetch the student.'));
            return;
        }
        var response = {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
        cb(null, response);
    });
};
//# sourceMappingURL=getStudent.js.map