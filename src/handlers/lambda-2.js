exports.handler =  async function(event, context) {
	console.log('LLEGO A LA LAMBDA --------')
	console.log('NODE_ENV', process.env.NODE_ENV)
	console.log('AWS_ACCESS_KEY_ID',process.env.AWS_ACCESS_KEY_ID)
	console.log('AWS_REGION',process.env.AWS_REGION)
	console.log('AWS_SECRET_ACCESS_KEY',process.env.AWS_SECRET_ACCESS_KEY)
	console.log('DB_HOST',process.env.DB_HOST)
	console.log('DB_USER',process.env.DB_USER)
	
	return { statusCode: '200', body: JSON.stringify({ message: 'Success' })  }
}