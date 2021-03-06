import handler from "./util/handler";
import dynamoDB from "./util/dynamodb";

export const main = handler( async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
            noteId: event.pathParameters.id,
        },
    };

    await dynamoDB.delete(params);

    return {status: true};
});