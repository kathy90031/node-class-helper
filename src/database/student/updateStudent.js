'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
var dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.update = function (event, context, cb) {
    var timestamp = new Date().getTime();
    var data = JSON.parse(event.body);
    if (typeof data.firstName !== 'string' || typeof data.lastName !== 'string') {
        console.error('Validation Failed');
        cb(new Error('Couldn\'t update the student.'));
        return;
    }
    var params = {
        TableName: process.env.DYNAMODB_TABLE_STUDENT,
        Key: {
            id: event.pathParameters.id,
        },
        ExpressionAttributeValues: {
            ':firstName': data.firstName,
            ':lastName': data.lastName,
            ':age': data.age,
            ':checked': data.checked,
            ':updatedAt': timestamp,
        },
        UpdateExpression: 'SET firstName = :firstName, lastName = :lastName,age = :age, updatedAt = :updatedAt',
        ReturnValues: 'ALL_NEW',
    };
    // update the todo in the database
    dynamoDb.update(params, function (error, result) {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t update the todo item.'));
            return;
        }
        // create a response
        var response = {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
        };
        cb(null, response);
    });
};
//# sourceMappingURL=updateStudent.js.map