import handler from "./util/handler";
import dynamoDB from "./util/dynamodb";

export const main = handler(async (e) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "123",
        },
    };
    const result = await dynamoDB.query(params);

    return result.Items;
});