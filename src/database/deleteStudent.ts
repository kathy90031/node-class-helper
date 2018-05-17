'use strict';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const deleteStudent: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_STUDENT,
        Key: {
            id: event.pathParameters.id,
        },
    };

    // delete the pet from the database
    dynamoDb.delete(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t remove the pet item.'));
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify({}),
        };
        cb(null, response);
    });
};