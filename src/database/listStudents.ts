'use strict';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const params = {
    TableName: process.env.DYNAMODB_TABLE_STUDENT,
};

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const list: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    dynamoDb.scan(params, (error,result) => {
        if (error) {
            console.error(error);
            cb(new Error('Could not fetch students.'));
            return;
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        cb(null,response);
    });

};
