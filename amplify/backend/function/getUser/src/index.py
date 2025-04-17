import json
import boto3
from boto3.dynamodb.conditions import Key,  Attr
import os

userTableRef = os.environ.get('STORAGE_USERS_NAME')

def handler(event, context):
  print(event)
  dynamodb = boto3.resource('dynamodb')
  table = dynamodb.Table(userTableRef)
  cognitoData = event['requestContext']['identity']['cognitoAuthenticationProvider']
  userId = cognitoData.split(':')[-1]

  response = table.query(
    KeyConditionExpression=Key('id').eq(userId)
  )
  items = response['Items']

  print('userid' + userId)
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