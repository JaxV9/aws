import json
import os
import boto3
import uuid


userTableRef = os.environ.get('STORAGE_USERS_NAME')
adressTableRef = os.environ.get('STORAGE_ADRESSES_NAME')
def handler(event, context):
  
    dynamodb = boto3.resource('dynamodb')
    userTable = dynamodb.Table(userTableRef)
    adressTable = dynamodb.Table(adressTableRef)

    cognitoData = event['requestContext']['identity']['cognitoAuthenticationProvider']
    userId = cognitoData.split(':')[-1]

    print('received event:')
    print(event)

    body = json.loads(event['body'])
    currentAdress = body.get('adress')

    adress_item = {
        'id': str(uuid.uuid4()),
        'name': currentAdress,
        'user_id': userId
    }

    try:
        adressTable.put_item(Item=adress_item)
    except Exception as error:
        print('Erreur lors de l\'insertion dans DynamoDB:', error)

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Hello from your new Amplify Python lambda!')
    }