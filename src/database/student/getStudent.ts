'use strict';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const get: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_STUDENT,
        Key: {
            id: event.pathParameters.id,
        },
    };
    // fetch pet from the database
    dynamoDb.get(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t fetch the student.'));
            return;
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
        cb(null,response);
    });

};
