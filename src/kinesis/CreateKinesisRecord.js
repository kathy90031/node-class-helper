"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = require("aws-sdk");
var CreateKinesisRecord = /** @class */ (function () {
    function CreateKinesisRecord(streamName) {
        this.streamName = streamName;
        this._streamName = streamName;
    }
    Object.defineProperty(CreateKinesisRecord.prototype, "eventData", {
        get: function () {
            return this._eventData;
        },
        set: function (value) {
            this._eventData = value;
        },
        enumerable: true,
        configurable: true
    });
    CreateKinesisRecord.prototype.putRecord = function () {
        var uuid = require('uuid');
        var data = this._eventData;
        var kinesis = new aws_sdk_1.Kinesis();
        var partitionKey = uuid.v1();
        var params = {
            Data: data,
            PartitionKey: partitionKey,
            StreamName: this._streamName
        };
        kinesis.putRecord(params);
    };
    return CreateKinesisRecord;
}());
exports.CreateKinesisRecord = CreateKinesisRecord;
//# sourceMappingURL=CreateKinesisRecord.js.map