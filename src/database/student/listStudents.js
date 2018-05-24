'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
var params = {
    TableName: process.env.DYNAMODB_TABLE_STUDENT,
};
var dynamoDb = new AWS.DynamoDB.DocumentClient();
exports.list = function (event, context, cb) {
    dynamoDb.scan(params, function (error, result) {
        if (error) {
            console.error(error);
            cb(new Error('Could not fetch students.'));
            return;
        }
        var response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        cb(null, response);
    });
};
//# sourceMappingURL=listStudents.js.map