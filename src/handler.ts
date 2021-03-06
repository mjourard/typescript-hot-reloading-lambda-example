import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is a typescript serverless lambda function!',
      path: event.path,
    }, null, 2),
  };
}
