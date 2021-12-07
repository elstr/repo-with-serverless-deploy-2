exports.handler =  async function(event, context) {
	console.log('NODE_ENV', process.env.NODE_ENV,)
	console.log('region', process.env.AWS_REGION,)
	console.log('accessKeyId', process.env.AWS_ACCESS_KEY_ID,)
	console.log('secretAccessKey', process.env.AWS_SECRET_ACCESS_KEY)
}