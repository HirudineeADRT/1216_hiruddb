import boto3
ddb = boto3.client("dynamodb")

def handler(event, context):

    try:
        data = ddb.scan(
            TableName="hirutest",
            ExpressionAttributeValues={
                ':c': {
                    'S': "balck"
                },
                ':p': {
                    'S': "500"
                }
            },
            FilterExpression="colour = :c and price < :p"
        )
    except BaseException as e:
        print(e)
        raise(e)




    
    return {"message": data}
