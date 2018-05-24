"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var handler_1 = require("./handler");
var expect = chai.expect;
var should = chai.should();
describe("handler", function () {
    describe("hello", function () {
        it("should return Serverless boilerplate message", function () {
            handler_1.hello(null, null, function (error, result) {
                expect(error).to.be.null;
                result.body.should.equal('{"message":"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!","input":null}');
            });
        });
    });
});
//# sourceMappingURL=handler.spec.js.map