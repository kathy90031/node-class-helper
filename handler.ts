import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import {Student} from "./src/model/Student";

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  let student = new Student("Katherine", "Youngblood", 45);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: student.firstName + " " + student.lastName,
      input: event,
    }),
  };

  cb(null, response);
}
