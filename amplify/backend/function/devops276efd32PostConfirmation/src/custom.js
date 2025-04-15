/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");
const lambdaClient = new LambdaClient()

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  if(event.triggerSource === "PostConfirmation_ConfirmSignUp") {
    const user_id = event.userName;
    const email = event.request.userAttributes.email;

    const asyncLambdaParams = {
      FunctionName: process.env.STORAGE_USERS_NAME,
      InvocationType: "Event",
      Payload: JSON.stringify({user_id, email})
    }
    const command = new InvokeCommand(asyncLambdaParams)
    await lambdaClient.send(command)
  }
  return event;
};
