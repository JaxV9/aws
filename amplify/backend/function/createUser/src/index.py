import json
import uuid
import boto3
import os

dynamodb = boto3.resource('dynamodb')
userTableRef = os.environ.get('STORAGE_USERS_NAME')

def handler(event, context):
  
    user_id = event.get('user_id')
    email = event.get('email')
    first_name = event.get('first_name')
    last_name = event.get('last_Name')

    user_item = {
        'id': user_id,
        'email': email,
        'first_name': first_name,
        'last_name': last_name
    }

    table = dynamodb.Table(userTableRef)

    try:
        table.put_item(Item=user_item)
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