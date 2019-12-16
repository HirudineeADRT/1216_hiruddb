import boto3
ddb = boto3.client("dynamodb")

def handler(event, context):
    try:
        data = ddb.put_item(
            TableName="hirutes",
            Item={
                'id': {
                    'S': "123"
                },
                'name': {
                    'S': "hiru"
                },
                'role': {
                    'S': "qa"
                }
            }
        )
    except BaseException as e:
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
