import {Kinesis} from "aws-sdk";


export class CreateKinesisRecord {
    private _streamName: string;
    private _eventData: string;

    constructor(public streamName: string){
        this._streamName = streamName;
    }

    public get eventData(): string {
        return this._eventData;
    }

    public set eventData(value: string) {
        this._eventData = value;
    }

    public putRecord() {
        const uuid = require('uuid');
        const data = this._eventData;
        const kinesis = new Kinesis();

        const partitionKey = uuid.v1();

        const params = {
            Data: data,
            PartitionKey: partitionKey,
            StreamName: this._streamName
        };

        kinesis.putRecord(params);
    }
}
