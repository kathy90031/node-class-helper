'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
var dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.deleteStudent = function (event, context, cb) {
    var params = {
        TableName: process.env.DYNAMODB_TABLE_STUDENT,
        Key: {
            id: event.pathParameters.id,
        },
    };
    // delete the pet from the database
    dynamoDb.delete(params, function (error) {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t remove the pet item.'));
            return;
        }
        // create a response
        var response = {
            statusCode: 200,
            body: JSON.stringify({}),
        };
        cb(null, response);
    });
};
//# sourceMappingURL=deleteStudent.js.map