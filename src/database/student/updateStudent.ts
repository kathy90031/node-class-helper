'use strict';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const update: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);
    if (typeof data.firstName !== 'string' || typeof data.lastName !== 'string') {
        console.error('Validation Failed');
        cb(new Error('Couldn\'t update the student.'));
        return;
    }
    const params = {
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
    dynamoDb.update(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t update the todo item.'));
            return;
        }
        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
        };
        cb(null, response);
    });
};
