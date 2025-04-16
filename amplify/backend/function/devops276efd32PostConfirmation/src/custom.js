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
    const first_name = event.request.userAttributes.name;
    const last_Name = event.request.userAttributes.family_name

    const asyncLambdaParams = {
      FunctionName: process.env.FUNCTION_CREATEUSER_NAME,
      InvocationType: "Event",
      Payload: JSON.stringify({user_id, email, first_name, last_Name})
    }
    const command = new InvokeCommand(asyncLambdaParams)
    await lambdaClient.send(command)
  }
  return event;
};
