'use strict';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import {CreateKinesisRecord} from "../../kinesis/CreateKinesisRecord";

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

// The document client affords developers the use of native JavaScript
// types instead of AttributeValues to simplify the JavaScript development
// experience with Amazon DynamoDB.
// - AWS Documentation
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const createKinesisRec = new CreateKinesisRecord('kinesis-test');

export const create: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);
    if (typeof data.firstName !== 'string' || typeof data.lastName !== 'string') {
        console.error('Validation Failed');
        cb(new Error('Couldn\'t create the student.'));
        return;
    }

    const params = {
        TableName: process.env.DYNAMODB_TABLE_TEACHER,
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
    dynamoDb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            cb(new Error('Couldn\'t create the student.'));
            return;
        }
        createKinesisRec.eventData = "create teacher";
        createKinesisRec.putRecord();
        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        cb(null, response);
    });
}
