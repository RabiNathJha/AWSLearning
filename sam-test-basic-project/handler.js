exports.hello = (event, context, callback) => {

    // const done = (err, res) => callback(null, {
    //     statusCode: err ? '400' : '200',
    //     body: err ? err.message : JSON.stringify(res),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    
    switch (event.httpMethod) {
        case 'DELETE':
            sendResponse(200, 'Delete Happened', callback)
            break;
        case 'GET':
            sendResponse(200, 'GET Happened', callback)
            break;
        case 'POST':
            sendResponse(200, 'POST Happened', callback)
            break;
        case 'PUT':
            sendResponse(200, 'PUT Happened', callback)
            break;
        default:
            sendResponse(404, 'Unsupported Method', callback)
         }
    };

function sendResponse(statusCode, message, callback) {
	const response = {
		statusCode: statusCode,
		body: JSON.stringify(message)
	};
	callback(null, response);
}