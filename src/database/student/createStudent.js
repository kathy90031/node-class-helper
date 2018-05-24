'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require('uuid');
var AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
// The document client affords developers the use of native JavaScript
// types instead of AttributeValues to simplify the JavaScript development
// experience with Amazon DynamoDB.
// - AWS Documentation
var dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.create = function (event, context, cb) {
    var timestamp = new Date().getTime();
    var data = JSON.parse(event.body);
    if (typeof data.firstName !== 'string' || typeof data.lastName !== 'string') {
        console.error('Validation Failed');
        cb(new Error('Couldn\'t create the student.'));
        return;
    }
    var params = {
        TableName: process.env.DYNAMODB_TABLE_STUDENT,
        Item: {
            id: uuid.v1(),
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            createdAt: timestamp,
            updatedAt: timestamp,
        },
    };
    // write the pet to the database
    dynamoDb.put(params, function (error) {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t create the student.'));
            return;
        }
        // create a response
        var response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        cb(null, response);
    });
};
//# sourceMappingURL=createStudent.js.map