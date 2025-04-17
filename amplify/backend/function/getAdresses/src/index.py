
import json
import os, boto3
from boto3.dynamodb.conditions import Key,  Attr

adressTableRef = os.environ.get('STORAGE_ADRESSES_NAME')
def handler(event, context):
    print('received event:')
    print(event)
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(adressTableRef)
    cognitoData = event['requestContext']['identity']['cognitoAuthenticationProvider']
    userId = cognitoData.split(':')[-1]

    response = table.scan(
    FilterExpression=Attr('user_id').eq(userId)
    )
    items = response['Items']

    print(items)
  
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(items)
    }